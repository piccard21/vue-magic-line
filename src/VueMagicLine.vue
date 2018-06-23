
  <template>
        <div ref="magic-line-wrapper" class="magic-line-wrapper">  

            <div ref="magic-line-item-wrapper" class="magic-line-item-wrapper" @mouseleave="onMouseleave($event)">
              <div class="magic-line-item" v-for="(tab, index) in tabs" :key="index"> 
                    <a href="#" 
                        @click.prevent="onClick($event, index)" 
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
        magicLineWrapperCss: {
          type: Object,
          default: function () {
            return {}
          }
        },
        magicLineItemWrapperCss: {
          type: Object,
          default: function () {
            return {}
          }
        },
        magicLineItemCss: {
          type: Object,
          default: function () {
            return {}
          }
        },
        magicLineItemLinkCss: {
          type: Object,
          default: function () {
            return {}
          }
        },
        magicLineContentWrapperCss: {
          type: Object,
          default: function () {
            return {}
          }
        },
        primaryColor: {
          type: String
        },
        primaryHeight: {
          type: Number
        },
        primaryTop: {
          type: Number,
          default: 0
        },
        secondaryColor: {
          type: String
        },
        secondaryHeight: {
          type: Number
        },
        secondaryTop: {
          type: Number,
          default: 0
        },
        duration: {
          type: Number,
          default: 0.3
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

          let top = 0
          if(elToPosition.classList.contains('magic-line-primary')) {
            top += this.primaryTop
          } else {
            top += this.secondaryTop
          }

          let elMetrics = el.getBoundingClientRect()
          let elMetricsItemWrapper = this.magicLineItemWrapper.getBoundingClientRect() 

          elToPosition.style.width = elMetrics.width + "px"
          elToPosition.style.left = elMetrics.left-elMetricsItemWrapper.left + "px"
          elToPosition.style.top = elMetrics.top - elMetricsItemWrapper.top + elMetrics.height + top + "px"
        },
        setPrimary(el) {   
          if(typeof el === "undefined" ) return 

          this.$emit('before-set-primary', this.magicLinePrimary)
          this.setPosition(el, this.magicLinePrimary)
          this.$emit('set-primary', this.magicLinePrimary)

          for (let element of this.magicLineItemWrapper.getElementsByClassName("active")) {
            element.classList.remove('active')
          }

          el.parentNode.classList.add('active');
        },
        setSecondary(el) { 
          if(!this.secondary) return 
          if(typeof el === "undefined" ) return 

          this.$emit('before-set-secondary', this.magicLineSecondary)
          this.setPosition(el, this.magicLineSecondary)
          this.$emit('set-secondary', this.magicLineSecondary)
        },
        setCssObject(cssObject) { 
            if(cssObject.el instanceof HTMLCollection) {
              for (let el of cssObject.el) { 
                  Object.entries(cssObject.css).forEach((entry) => {
                    let [key, value] = entry;
                    el.style[key] = value 
                  }); 
              }
            }
            else {
              Object.entries(cssObject.css).forEach((entry) => {
                let [key, value] = entry;
                cssObject.el.style[key] = value 
              });
            } 

        },
        setCss() {
          // tabs 
          [{
            css: this.magicLineWrapperCss, 
            el: this.magicLineWrapper
          },{
            css: this.magicLineItemWrapperCss, 
            el: this.magicLineItemWrapper
          },{
            css: this.magicLineItemCss, 
            el: this.magicLineItems
          },{
            css: this.magicLineItemLinkCss, 
            el: this.magicLineItemLinks
          },{
            css: this.magicLineContentWrapperCss, 
            el: this.magicLineContentWrapper
          }].forEach((object) => {
            this.setCssObject(object)
          })

          // primary
          if(this.primaryColor) {
            this.magicLinePrimary.style.background = this.primaryColor;
          }
          if(this.primaryHeight) {
            this.magicLinePrimary.style.height = this.primaryHeight+"px";
          }

          // secondary
          if(!this.secondary) {
            this.magicLineSecondary.parentNode.removeChild(this.magicLineSecondary)
          } else {
            if(this.secondaryColor) {
            this.magicLineSecondary.style.background = this.secondaryColor;
            }
            if(this.secondaryHeight) {
              this.magicLineSecondary.style.height = this.secondaryHeight+"px";
            }
          }

          // duration
          this.magicLinePrimary.style.transition = "all " + this.duration +"s"
          this.magicLineSecondary.style.transition = "all " + this.duration +"s"
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

    .magic-line-item-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .magic-line-item {
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
      height: 3px;
      background: rgba(66, 185, 131, 0.44);
      z-index: 2000;
    }

    .magic-line-secondary {
      position: absolute;
      bottom: 3px;
      left: 0;
      height: 2px;
      background: rgba(211, 211, 211, 0.4);
      z-index: 1000;
    }

  } 

  .magic-line-content-wrapper {
      padding: 2rem 0;
  }

} 
</style>