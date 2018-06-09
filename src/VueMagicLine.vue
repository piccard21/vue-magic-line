
  <template>
        <div id="aaa" ref="magic-line-wrapper" class="d-block position-relative"> 
            <div class="d-flex flex-row magic-line-item-wrapper">


              <div class="p-2 magic-line-item" v-for="(item, index) in items" :key="index"> 
                    <a href="#" 
                        @click="onClick($event, index)" 
                        @mouseover="onHover($event, index)"
                        :class="{ active: isPrimary(index) }"
                        :id="'magic-line-'+index">{{ item.text }}</a>
              </div>


            </div>
            <div class="magic-line-primary" ref="magic-line-primary"></div>
            <div class="magic-line-secondary" ref="magic-line-secondary"></div>
        </div> 
  </template>

<script> 

    export default {
      name: 'vue-magic-line',
      props: {
        active: {
          type: Number,
          default: 0
        },
        secondary: {
          type: Boolean,
          default: true
        },
      },
      data () {
        return {
            activeIndex: 0,
            items: [{
                text: "Flex item 1",
            },{
                text: "Flex item 222",
            },{
                text: "Flex item 333333",
            },{
                text: "Flex item 4444444444",
            },{
                text: "Flex item 555555555555555",
            }]
        }
      }, 
      methods: {
        onClick(event, index) {
             this.setPrimary(event.target, index)
        },
        onHover(event, index) {
            this.setSecondary(event.target, index)
        },
        isPrimary(index) {
            return this.active == index
        },
        setPrimary(el, index) {
          let elMetrics = el.getBoundingClientRect()
          this.magicLinePrimary.style.width = elMetrics.width + "px"
          this.magicLinePrimary.style.left = elMetrics.left + "px"

          for (let element of this.$refs["magic-line-wrapper"].getElementsByClassName("active")) {
            element.classList.remove('active')
          }

          el.classList.add('active');

          this.activeIndex = index
        },
        setSecondary(el, index) { 
          if(!this.secondary) return

          let elMetrics = el.getBoundingClientRect()
          this.magicLineSecondray.style.width = elMetrics.width + "px"
          this.magicLineSecondray.style.left = elMetrics.left + "px"
        }
      },
      computed: {
        magicLinePrimary() {
            return this.$refs["magic-line-primary"]
        },
        magicLineSecondray() {
            return this.$refs["magic-line-secondary"]
        },
        magicLineWrapper() {
            return this.$refs["magic-line-wrapper"]
        }
      }, 
      created() {
        this.activeIndex = this.active
      },
      mounted() {
        let activeEl = this.$refs["magic-line-wrapper"].getElementsByClassName("active")[0]  
        this.setPrimary(activeEl, this.activeIndex)

        if(this.secondary) {
          this.setSecondary(activeEl, this.activeIndex)
        } else {  
          this.magicLineSecondray.parentNode.removeChild(this.magicLineSecondray);
        }
      }, 
    }
</script>

<style scoped lang="scss"> 
  .magic-line-wrapper {
    position: relative;
    display: block;
  } 

  .magic-line-primary {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 14px;
    background: red;
    transition: all 0.3s;
    z-index: 2000;
  }

  .magic-line-secondary {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 6px;
    background: lightgrey;
    transition: all 0.3s;
    z-index: 1000;
  }
</style>