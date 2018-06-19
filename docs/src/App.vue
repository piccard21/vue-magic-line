<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png">
      <h1>{{ title }}</h1>
      <h2>A tabs vue-component</h2> 
    </div>

    <div class="main">

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
      
      <default01/>
      
    </div>
  </div>
</template>

<script>
import {VueMagicLine, VueMagicLineTab} from 'vue-magic-line';
import Default01 from './components/Default_01';

export default {
  name: 'app',
  components: {
    VueMagicLine,
    VueMagicLineTab,
    Default01
  },
  data () {
    return {
      title: 'vue-magic-line'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-weight: normal;
  text-align: center;
}
 

a {
  color: #42b983;
}
</style>
