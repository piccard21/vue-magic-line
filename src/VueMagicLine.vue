
  <template>
        <div ref="magic-line-wrapper" class="magic-line-wrapper">  

            <div ref="magic-line-item-wrapper" class="magic-line-item-wrapper" @mouseleave="onMouseleave($event)">
              <div class="magic-line-item" v-for="(tab, index) in tabs" :key="index"> 
                    <a href="#" 
                        @click="onClick($event, index)" 
                        @mouseover="onHover($event)"
                        class="magic-line-item-link"
                        :class="{ active: isPrimary(index), disabled: isDisabled(index) }">
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
    export default {
      name: 'vue-magic-line',
      props: {
        secondary: {
          type: Boolean,
          default: true
        },
        parent: {
          type: Boolean,
          default: true
        },
        justifyContent: {
          type: String,
          default: "flex-start"
        },
        primaryColor: {
          type: String
        },
        primaryHeight: {
          type: Number
        },
        primaryBottom: {
          type: Number
        },
        secondaryColor: {
          type: String
        },
        secondaryHeight: {
          type: Number
        },
        secondaryBottom: {
          type: Number
        }
      },
      data () {
        return {
            tabs: [],
            disabledTabs: [],
            currentActiveIndex: 0
        }
      }, 
      methods: {
        onMouseleave(event) {
          this.setSecondary(this.magicLineItemLinks[this.activeIndex]) 
        },
        onClick(event, index) {
             if(event.target.classList.contains("disabled")) {
              event.preventDefault
              return
             }
             this.activeIndex=index
        },
        onHover(event) {
            this.setSecondary(event.target)
        },
        isPrimary(index) {
            return this.activeIndex == index
        },
        isDisabled(index) {
            return this.disabledTabs.includes(index)
        },
        setPosition(el, elToPosition) {
          if(this.parent) {
            el = el.parentNode
          }

          let elMetrics = el.getBoundingClientRect()
          let elMetricsItemWrapper = this.magicLineItemWrapper.getBoundingClientRect() 

          elToPosition.style.width = elMetrics.width + "px"
          elToPosition.style.left = elMetrics.left + "px"
          elToPosition.style.top = elMetrics.top - elMetricsItemWrapper.top + elMetrics.height + "px"
        },
        setPrimary(el) {   
          if(typeof el === "undefined" ) return 

          this.setPosition(el, this.magicLinePrimary)

          for (let element of this.magicLineItemWrapper.getElementsByClassName("active")) {
            element.classList.remove('active')
          }

          el.parentNode.classList.add('active');
        },
        setSecondary(el) { 
          if(!this.secondary) return 
          if(typeof el === "undefined" ) return 

          this.setPosition(el, this.magicLineSecondary)
        },
        setCss() {
          //set justifyContent
          console.info(this.justifyContent) 
            // for (let mi of this.magicLineItems) {
            //   mi.style.justifyContent = this.justifyContent
            // } 
            this.magicLineItemWrapper.style.justifyContent = this.justifyContent

          // set primary
          if(this.primaryColor) {
            this.magicLinePrimary.style.background = this.primaryColor;
          }
          if(this.primaryHeight) {
            this.magicLinePrimary.style.height = this.primaryHeight+"px";
          }
          if(this.primaryBottom) {
            this.magicLinePrimary.style.bottom = this.primaryBottom+"px";
          }

          if(!this.secondary) {
            this.magicLineSecondary.parentNode.removeChild(this.magicLineSecondary)
          } else {
            if(this.secondaryColor) {
            this.magicLineSecondary.style.background = this.secondaryColor;
            }
            if(this.secondaryHeight) {
              this.magicLineSecondary.style.height = this.secondaryHeight+"px";
            }
            if(this.secondaryBottom) {
              this.magicLineSecondary.style.bottom = this.secondaryBottom+"px";
            }
          }
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
        magicLineItems() {
          return this.magicLineItemWrapper.getElementsByClassName("magic-line-item") 
        },
        magicLineItemLinks() {
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

            this.setPrimary(this.magicLineItemLinks[index]) 
            this.setSecondary(this.magicLineItemLinks[index]) 

            for(let [i, tab] of this.tabs.entries()) {  
                tab.isActive = (index === i);
            }
          } 
        }
      }, 
      created() {
        this.tabs = this.$children 
      },
      mounted() {
        this.$nextTick( () => { 

          //set css
          this.setCss()

          for(let [i, tab] of this.tabs.entries()) {  
            // set active tab
            if('active' in tab.$attrs) {
              tab.isActive = this.activeIndex  = i
            } 
            // set disabled tabs
            if('disabled' in tab.$attrs) {
              tab.isDisabled = true
              this.disabledTabs.push(i)
            } 
          }
        })
       }  
    }
</script>

<style  lang="scss">   

  .magic-line-wrapper {
    display: block;
    position: relative; 
    background: yellow;

    .magic-line-item-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; 
      background: orange;

      .magic-line-item {
      background: blue;
     flex: 1;
        padding: .5rem;

        .magic-line-item-link, 
        .magic-line-item-link:link, 
        .magic-line-item-link:visited, 
        .magic-line-item-link:hover,
        .magic-line-item-link:active  {
          color: #42b983;
          text-decoration: none;
        }

        .disabled {
          color: currentColor;
          cursor: not-allowed;
          opacity: 0.5;
          text-decoration: none;
        }
      }


    .magic-line-primary {
      position: absolute;
      bottom: 3px;
      left: 0; 
      transition: all 0.3s;
      height: 3px;
      background: rgb(0, 188, 212);
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

  } 

} 
</style>