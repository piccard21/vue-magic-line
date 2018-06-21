<template> 
  <div class="content">
    <h6 class="title is-5">Primary & Secondary CSS settings</h6> 
    <p>
      Set color, height and bottom margin of the primary and secondary line.  
    </p>
    <vue-magic-line>
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
<vue-magic-line
  primary-color="#009688" 
  :primary-height="10" 
  :primary-bottom="-8"
  secondary-color="rgba(0, 188, 212, 0.57)" 
  :secondary-height="10" 
  :secondary-bottom="-8">
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
  }
}
</script>

<style lang="scss" scoped>
</style>
