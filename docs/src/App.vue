<template>
  <div id="app">
    <section class="section">
      <div class="header">
        <img src="./assets/logo.png">
          <h4 class="title is-4">{{ title }}</h4>
          <h5 class="title is-5">A tabs vue-component</h5> 
      </div>
    </section>

    <section class="section">
      <div class="main">
        <div class="container">
            
          <default01/> 
          <hide-sec02/> 
          <primary-sec03/> 
          <parent-05/> 
          <responsive-06/> 
          <btn-07/> 
          <css-04/> 
   
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Default01 from './components/Default_01';
import HideSec02 from './components/HideSec_02';
import PrimarySec03 from './components/PrimarySec_03';
import Css04 from './components/CSS_04';
import Parent05 from './components/Parent_05';
import Responsive06 from './components/Responsive_06';
import Btn07 from './components/Btn_07';

export default {
  name: 'app',
  components: {
    Default01,
    HideSec02,
    PrimarySec03,
    Css04,
    Parent05,
    Responsive06,
    Btn07
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
