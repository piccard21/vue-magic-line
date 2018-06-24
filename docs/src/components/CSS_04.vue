<template> 
  <div class="content">
    <h5 class="title is-5">CSS settings</h5> 
    <p>
      From the outer to the inner <i>vue-magic-line</i> consists out of 6 classes.

      <ul>
        <li>magic-line-wrapper
          <ul>
          <li>magic-line-item-wrapper
            <ul>
            <li>magic-line-item
              <ul>
                <li>magic-line-item-link</li>
              </ul>
            </li>
            </ul>
          </li>
          <li>magic-line-content-wrapper
              <ul>
                <li>magic-line-item-content</li>
              </ul>
          </li>
          </ul>
        </li>
      </ul>

      You can assign CSS to it, wether by properties or by your own CSS assignments. The properties you can use are:
      <ul>
        <li>magicLineWrapperCss</li>
        <li>magicLineItemWrapperCss</li>
        <li>magicLineItemCss</li>
        <li>magicLineItemLinkCss</li>
        <li>magicLineContentCss</li>
      </ul>
    </p>

    <br>

    <h6 class="title is-6">magic-line-item-wrapper</h6> 

      Be aware that <b>magic-line-item-wrapper</b> is a flex item, so you can do some pretty awesome things with the layout of the tabs.
      See here some examples:

    <vue-magic-line 
    ref="vue-magic-line-1">
      <vue-magic-line-tab name="First tab" >
          This is the content of the first vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Second tab" active>
          This is the content of the second vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Third tab" disabled>
          This is the content of the Third vue-magic-line-tab
      </vue-magic-line-tab> 
      <vue-magic-line-tab name="Fourth tab">
          This is the content of the Fourth vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Fifth tab" disabled>
          This is the content of the Fifth vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Sixth tab">
          This is the content of the Sixth vue-magic-line-tab
      </vue-magic-line-tab> 
    </vue-magic-line> 



    <div class="field is-horizontal">
      <label class="field-label is-normal">justify-content</label>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <div class="select" ref="select-justify-content">
                <select v-model="justifyContent">
                  <option value="">--Select--</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="space-around">space-around</option>
                  <option value="space-between">space-between</option>
                  <option value="space-evenly">space-evenly</option>
                </select>
              </div>
            </div>
          </div>
      </div>
    </div>

    <sourcecode :code="code1" /> 
    <br>

    <h6 class="title is-6">A more complete example</h6> 

    <vue-magic-line 
      ref="vue-magic-line-2"
      :magic-line-wrapper-css="{'background': 'rgba(145, 192, 239, 0.47)'}"
      :magic-line-item-wrapper-css="{'justify-content': 'center', 'background': 'rgb(145, 192, 239)'}"
      :magic-line-item-link-css="{'color': '#fff' }"
      :magic-line-content-wrapper-css="{'margin-left': '.8rem' }"
      primary-color="#fff" 
      :primary-height="8" 
      secondary-color="#03a9f4" 
      :secondary-height="2"
      :duration=".4">
      <vue-magic-line-tab name="First tab" >
          This is the content of the first vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Second tab" active>
          This is the content of the second vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Third tab" disabled>
          This is the content of the Third vue-magic-line-tab
      </vue-magic-line-tab> 
      <vue-magic-line-tab name="Fourth tab">
          This is the content of the Fourth vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Fifth tab" disabled>
          This is the content of the Fifth vue-magic-line-tab
      </vue-magic-line-tab>
      <vue-magic-line-tab name="Sixth tab">
          This is the content of the Sixth vue-magic-line-tab
      </vue-magic-line-tab> 
    </vue-magic-line> 

    <sourcecode :code="code2" /> 
    
  </div> 
</template>

<script>


import Sourcecode from './Sourcecode';  

export default {
  components: {
    Sourcecode
  },
  data () {
    return {
      justifyContent: '',
    }
  },
  computed: {
      code1() {
        return `

<vue-magic-line
      :magic-line-item-wrapper-css="{'justify-content': '${this.justifyContent}'}">
  <vue-magic-line-tab name="First tab" >
      This is the content of the first vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Second tab" active>
      This is the content of the second vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Third tab" disabled>
      This is the content of the Third vue-magic-line-tab
  </vue-magic-line-tab> 
  <vue-magic-line-tab name="Fourth tab">
      This is the content of the Fourth vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Fifth tab" disabled>
      This is the content of the Fifth vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Sixth tab">
      This is the content of the Sixth vue-magic-line-tab
  </vue-magic-line-tab> 
</vue-magic-line> 
  `
    } ,
      code2() {
        return `
<vue-magic-line
  :magic-line-wrapper-css="{'background': 'rgba(145, 192, 239, 0.47)'}"
  :magic-line-item-wrapper-css="{'justify-content': 'center', 'background': 'rgb(145, 192, 239)'}"
  :magic-line-item-link-css="{'color': '#fff' }"
  :magic-line-content-wrapper-css="{'margin-left': '.8rem' }"
  primary-color="#fff" 
  :primary-height="8" 
  secondary-color="#03a9f4" 
  :secondary-height="2"
  :duration=".4">
  <vue-magic-line-tab name="First tab" >
      This is the content of the first vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Second tab" active>
      This is the content of the second vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Third tab" disabled>
      This is the content of the Third vue-magic-line-tab
  </vue-magic-line-tab> 
  <vue-magic-line-tab name="Fourth tab">
      This is the content of the Fourth vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Fifth tab" disabled>
      This is the content of the Fifth vue-magic-line-tab
  </vue-magic-line-tab>
  <vue-magic-line-tab name="Sixth tab">
      This is the content of the Sixth vue-magic-line-tab
  </vue-magic-line-tab> 
</vue-magic-line> 
  `
    } ,
    vueMagicLine() {
          return this.$children.find(k => k.$options.name === 'vue-magic-line')
    }
  },
  mounted() {
    console.info(this.vueMagicLine)
  },
  methods: {
  },
  watch: {
    justifyContent() {
      this.$refs['vue-magic-line-1'].$el.getElementsByClassName('magic-line-item-wrapper')[0].style['justify-content'] = this.justifyContent
      let firstLink = this.$children[0].$el.querySelector('.magic-line-item-link')
      this.$children[0].setPrimary(firstLink)
      this.$children[0].setSecondary(firstLink)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
