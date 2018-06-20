<template> 
  <div>  
        <highlight-code lang="xml" :code="wtf"> 
        </highlight-code>
 
  </div>
</template>

<script>


import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/default.css';

  
Vue.use(VueHighlightJS)

export default {
  data () {
    return {
      wtf: `
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
  },
  components: { 
    VueHighlightJS
  }
}
</script>

<style lang="scss">

</style>
