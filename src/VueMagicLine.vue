
  <template>
        <div ref="magic-line-wrapper" class="magic-line-wrapper" @mouseout="onMouseout($event)">  

            <div ref="magic-line-item-wrapper" class="magic-line-item-wrapper">
              <div class="magic-line-item" v-for="(tab, index) in tabs" :key="index"> 
                    <a href="#" 
                        @click="onClick($event, index)" 
                        @mouseover="onHover($event)"
                        class="magic-line-item-link"
                        :class="{ active: isPrimary(index) }">
                      {{ tab.name }}
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
    import _ from 'lodash' 

    export default {
      name: 'vue-magic-line',
      props: {
        secondary: {
          type: Boolean,
          default: true
        },
        active: {
          type: Number,
          default: 1
        }
      },
      data () {
        return {
            tabs: [],
            currentActiveIndex: 0
        }
      }, 
      methods: {
        onMouseout(event) {
          this.setSecondary(this.magicLineItemLinks[this.activeIndex]) 
        },
        onClick(event, index) {
             this.activeIndex=index
        },
        onHover(event) {
            this.setSecondary(event.target)
        },
        isPrimary(index) {
            return this.activeIndex == index
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
        console.info("magicLineItemWrapper ... ", this.$refs["magic-line-item-wrapper"])
            return this.$refs["magic-line-item-wrapper"]
        },
        magicLineContentWrapper() {
            return this.$refs["magic-line-content-wrapper"]
        }, 
        magicLineItemLinks() {
        console.info("this.magicLineItemLinks ... ", this.$refs["magic-line-item-wrapper"])
          return this.magicLineItemWrapper.getElementsByClassName("magic-line-item-link") 
        },
        magicLineContents() {
            return this.magicLineContentWrapper.getElementsByClassName("magic-line-item-content")
        }, 
        activeIndex: {
          get() {
            return this.currentActiveIndex
          },
          set(index) {
            this.currentActiveIndex = index
        console.info("this.magicLineItemLinks ...", this.magicLineItemLinks) 
            this.setPrimary(this.magicLineItemLinks[index]) 

            if(this.secondary) {
              this.setSecondary(this.magicLineItemLinks[index]) 
            }

            for(let [i, tab] of this.tabs.entries()) {  
                tab.isActive = (index === i);
            }
          } 
        }
      }, 
      created() {
        this.tabs = this.$children 
        // this.setPrimary = _.debounce(this.setPrimary, 100) 
        // this.setSecondary= _.debounce(this.setSecondary, 100)  
      },
      mounted() {
        this.$nextTick( () => { 
          this.activeIndex = this.active
          if(!this.secondary) {
            this.magicLineSecondary.parentNode.removeChild(this.magicLineSecondary)
          }
        })
       }  
    }
</script>

<style  lang="scss"> 

.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


  a,a:link,a:visited,a:hover,a:active {
    color: #42b983;
    text-decoration: none;
  } 


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