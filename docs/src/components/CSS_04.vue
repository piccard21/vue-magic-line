<template> 
  <div class="content">
    <h6 class="title is-5">CSS settings</h6> 
    <p>
      From the outer to the inner <i>vue-magic-line</i> consists out of 6 classes.
      <ul>
        <li>magic-line-wrapper</li>
        <li>magic-line-item-wrapper</li>
        <li>magic-line-item</li>
        <li>magic-line-item-link</li>
        <li>magic-line-content-wrapper</li>
        <li>magic-line-item-content</li>
      </ul>

      You can assign CSS to it, wether by parameters or by your own. The parameters you can use are:
      <ul>
        <li>magicLineWrapperCss</li>
        <li>magicLineItemWrapperCss</li>
        <li>magicLineItemCss</li>
        <li>magicLineItemLinkCss</li>
        <li>magicLineContentCss</li>
      </ul>

      Be aware that <b>magic-line-item-wrapper</b> is a flex item, so you can do great things with the layout of the tabs.
      See here some examples:
    </p>
    <vue-magic-line ref="vue-magic-line">
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

    <sourcecode :code="code" /> 
    
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
      code() {
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
      } 
  },
  methods: {
  },
  watch: {
    justifyContent() {
      this.$refs['vue-magic-line'].$el.getElementsByClassName('magic-line-item-wrapper')[0].style['justify-content'] = this.justifyContent
      let firstLink = this.$children[0].$el.querySelector('.magic-line-item-link')
      this.$children[0].setPrimary(firstLink)
      this.$children[0].setSecondary(firstLink)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
