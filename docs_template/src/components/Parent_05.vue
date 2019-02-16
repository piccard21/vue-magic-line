<template> 
  <div class="default-01 content">
    <h6 class="title is-5">parent</h6> 
    <p>
      Apply lines to parent div (the <b>magic-line-item</b> class) or directly to the link. See the difference.
    </p>

    <h6 class="title is-6">parent: true</h6> 
    <p>
      <b>true</b> is the default, so you don't have to set it.
    </p>

    <vue-magic-line 
      :parent="true"
      :magic-line-item-wrapper-css="{'justify-content': 'space-between', background: 'rgba(33, 150, 243, 0.78)'}"  
      :magic-line-item-link-css="{'color': '#fff'}"  
      primary-color="rgb(3, 169, 244)" 
      :primary-height="10" 
      secondary-color="rgba(0, 188, 212, 0.57)" 
      :secondary-height="10">
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
    
    <h6 class="title is-6">parent: false</h6> 
    <vue-magic-line 
      :parent="false"
      :magic-line-item-wrapper-css="{'justify-content': 'space-between', background: 'rgba(33, 150, 243, 0.78)'}"  
      :magic-line-item-link-css="{'color': '#fff'}"  
      primary-color="#fff" 
      :primary-height="3" 
      secondary-color="rgb(214, 212, 212)" 
      :secondary-height="1">
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
  :parent="false"
  :magic-line-item-wrapper-css="{'justify-content': 'space-between', background: 'rgba(33, 150, 243, 0.78)'}"  
  :magic-line-item-link-css="{'color': '#fff'}"  
  primary-color="#fff" 
  :primary-height="3" 
  secondary-color="rgb(214, 212, 212)" 
  :secondary-height="1">
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
