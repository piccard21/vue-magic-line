
  <template>
        <div ref="magic-line-wrapper" class="magic-line-wrapper" @mouseout="onMouseout($event)">  

            <div ref="magic-line-item-wrapper" class="magic-line-item-wrapper">
              <div class="magic-line-item" v-for="(tab, index) in tabs" :key="index"> 
                    <a href="#" 
                        @click="onClick($event, index)" 
                        @mouseover="onHover($event)"
                        class="magic-line-item-link"
                        :class="{ active: isPrimary(index) }">
                      {{ tab.text }}
                    </a>
              </div>

              <div class="magic-line-primary" ref="magic-line-primary"></div>
              <div class="magic-line-secondary" ref="magic-line-secondary"></div>

            </div>

            <div ref="magic-line-content-wrapper" class="magic-line-content-wrapper">
              <slot/>  
            </div>
        </div> 
  </template>

<script> 

    export default {
      name: 'vue-magic-line',
      props: {
        secondary: {
          type: Boolean,
          default: true
        }
      },
      data () {
        return {
            activeIndex: 0,
            tabs: []
        }
      }, 
      methods: {
        onMouseout(event) {
          this.setSecondary(this.magicLineItemLinks[this.active]) 
        },
        onClick(event, index) {
             this.active=index
        },
        onHover(event) {
            this.setSecondary(event.target)
        },
        isPrimary(index) {
            return this.active == index
        },
        setPrimary(el) { 
          if(typeof el === "undefined" ) return 

          let elMetrics = el.getBoundingClientRect()
          this.magicLinePrimary.style.width = elMetrics.width + "px"
          this.magicLinePrimary.style.left = elMetrics.left + "px"

          for (let element of this.magicLineItemWrapper.getElementsByClassName("active")) {
            element.classList.remove('active')
          }


          el.parentNode.classList.add('active');
        },
        setSecondary(el) { 
          if(!this.secondary) return 
          if(typeof el === "undefined" ) return 

          let elMetrics = el.getBoundingClientRect()
          this.magicLineSecondary.style.width = elMetrics.width + "px"
          this.magicLineSecondary.style.left = elMetrics.left + "px"
        }
      },
      computed: {
        magicLinePrimary() {
            return this.$refs["magic-line-primary"]
        },
        magicLineSecondary() {
            return this.$refs["magic-line-secondary"]
        },
        magicLineWrapper() {
            return this.$refs["magic-line-wrapper"]
        },
        magicLineItemWrapper() {
            return this.$refs["magic-line-item-wrapper"]
        },
        magicLineContentWrapper() {
            return this.$refs["magic-line-content-wrapper"]
        }, 
        magicLineItemLinks() {
          return this.magicLineItemWrapper.getElementsByClassName("magic-line-item-link")
        },
        magicLineContents() {
            return this.magicLineContentWrapper.getElementsByClassName("magic-line-item-content")
        }, 
        active: {
          get() {
            return this.activeIndex
          },
          set(index) {
            this.activeIndex = index

            this.setPrimary(this.magicLineItemLinks[index]) 

            if(this.secondary) {
              this.setSecondary(this.magicLineItemLinks[index]) 
            }

            for(let [i, tab] of this.tabs.entries()) {  
                tab.isActive = (this.active === i);
            }
          } 
        }
      }, 
      created() {
        this.tabs = this.$children
      },
      mounted() {
        if(!this.secondary) {
          this.magicLineSecondary.parentNode.removeChild(this.magicLineSecondary);
        } 
          let hasActive = false

          for(let  [index, tab] of this.tabs.entries()) {  
            if(tab.$el.classList.contains("active")) {   
              this.$nextTick( () => { 
                    hasActive = true
                    this.active = index  
                    tab.$el.classList.remove("active")    // TODO: why this doesn't work?!?!
              }) 
              break
            }
          } 

          if (!hasActive) {
                this.active = 0
          }
      }
    }
</script>

<style scoped lang="scss"> 
  .magic-line-wrapper {
    display: block;
  } 

  .magic-line-item-wrapper {
    display: flex;
    flex-dirextion: row;
    position: relative;
  }

  .magic-line-item {
    padding: .5rem;
  }

  .magic-line-primary {
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    background: rgb(0, 188, 212);
    transition: all 0.3s;
    z-index: 2000;
  }

  .magic-line-secondary {
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 2px;
    background: rgba(211, 211, 211, 0.4);
    transition: all 0.3s;
    z-index: 1000;
  }
</style>