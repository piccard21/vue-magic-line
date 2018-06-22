<template> 
  <div class="content">
    <h6 class="title is-5">Default Settings</h6> 
    <p>
      Vue-magic-line out of the box, with active and disabled attributes.
    </p>
    <vue-magic-line>
      <vue-magic-line-tab name="First tab">
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
      isOpen: false,
      code: `
<vue-magic-line>
    <vue-magic-line-tab name="First tab" >
        This is the content of the first vue-magic-line-tab
    </vue-magic-line-tab>
    <vue-magic-line-tab name="Second tab" active>
        <b>This is the content of the second vue-magic-line-tab</b>
    </vue-magic-line-tab>
    <vue-magic-line-tab name="Third tab" disabled>
        This is the content of the third vue-magic-line-tab
    </vue-magic-line-tab> 
    <vue-magic-line-tab name="Fourth tab">
        <i>This is the content of the fourth vue-magic-line-tab</i>
    </vue-magic-line-tab>
    <vue-magic-line-tab name="Fifth tab" disabled>
        This is the content of the fifth vue-magic-line-tab
    </vue-magic-line-tab>
    <vue-magic-line-tab name="Sixth tab">
        <p>This is the content of the sixth vue-magic-line-tab</p>
    </vue-magic-line-tab> 
  </vue-magic-line>  
</highlight-code>
  `
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  /deep/ .magic-line-item:first-of-type {
    padding-left: 0;
  }
}
</style>
