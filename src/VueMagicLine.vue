
  <template>
        <div ref="magic-line-wrapper" class="magic-line-wrapper"> 
            <div class="magic-line-item-wrapper">

              <div class="magic-line-item" v-for="(item, index) in items" :key="index"> 
                    <a href="#" 
                        @click="onClick($event, index)" 
                        @mouseover="onHover($event, index)"
                        class="magic-line-item"
                        :class="{ active: isPrimary(index) }">
                      {{ item.text }}
                    </a>
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
        items: {
          type: Array,
          required: true
        }
      },
      data () {
        return {
            activeIndex: 0
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
          this.magicLineSecondary.parentNode.removeChild(this.magicLineSecondary);
        }
      }, 
    }
</script>

<style scoped lang="scss"> 
  .magic-line-wrapper {
    position: relative;
    display: block;
  } 

  .magic-line-item-wrapper {
    display: flex;
    flex-dirextion: row;
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