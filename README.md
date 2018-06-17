# vue-magic-line

> A tabs-component for Vue.
 
## Features

- multiple options for styling



## Configuration


### Install component

``` 
import VueMagicLine from 'vue-magic-line'

Vue.use(VueMagicLine)
``` 


### Template

``` 
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
``` 


### Bigger example

``` 
<template> 
    <div class="my-awesome-tabs">
      
      <vue-magic-line 
      :secondary="true" 
      :magic-line-wrapper-css="{'background': '#fff'}"  
      :magic-line-item-wrapper-css="{'justify-content': 'space-between', 'color': 'green'}"  
      :magic-line-item-css="{'flex-grow': '1'}"  
      :magic-line-item-link-css="{'color': '#fff'}"  
      primary-color="red" 
      :primary-height="10" 
      :primary-bottom="-20">
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

      <input type="number" min="0" :max="tabsCount" v-model.number="tabDisable">
      <button @click="toogleDisable">Toggle Disable</button>
      <br>

      <input type="number" min="0" :max="tabsCount" v-model.number="tabActive">
      <button @click="toogleActive">Toggle Active</button>

    </div>
  </template>

<script> 
    import VueMagicLine from 'vue-magic-line'

    Vue.use(VueMagicLine)
    export default {
      data() {
        return {
          tabsCount: 0,
          tabDisable: 2,
          tabActive: 0
        }
      },
      methods: {
        toogleDisable() {
          let disabledTabs = this.$children[0].disabledTabs
          let indexOf = disabledTabs.indexOf(this.tabDisable)

          if(indexOf > -1) {
            disabledTabs.splice(disabledTabs.indexOf(this.tabDisable), 1); 
          } else {
            disabledTabs.push(this.tabDisable); 
          }
        },
        toogleActive() {
          let disabledTabs = this.$children[0].disabledTabs
          let indexOf = disabledTabs.indexOf(this.tabActive)

          if(indexOf > -1) {
            console.info("disabled")
          } else {
            this.$children[0].activeIndex = this.tabActive
          }
        }
      },
      mounted() {
        this.tabsCount = this.$children[0].$children.length-1
      }
    }
</script>

<style lang="scss"> 

.my-awesome-tabs {
  /deep/ .magic-line-wrapper {
    .magic-line-item-wrapper { 
       .magic-line-secondary {
          background: blue ;
          height: 1px ;
          bottom: -10px ;
      }
    }
  } 
} 

</style>
``` 


## Options

Property | Description | Value | Default value
--- | --- | --- | ---
 **secondary** | show secondary line | Boolean | true
 **parent** | apply to parent and not to link | Boolean | true
 **magicLineWrapperCss** | CSS for  class **magic-line-wrapper**| Object | {}
 **magicLineItemWrapperCss** | CSS for  class **magic-line-item-wrapper**| Object | {}
 **magicLineItemCss** | CSS for  class **magic-line-item**| Object | {}
 **magicLineItemCLinkss** | CSS for  class **magic-line-item-link**| Object | {}
 **primaryColor** | color for primary line| String | rgb(0, 188, 212)
 **primaryHeight** | height for primary line| Number | 3px
 **primaryBottom** | bottom for primary line| Number | 3px
 **secondaryColor** | color for secondary line| String | rgba(211, 211, 211, 0.4)
 **secondaryHeight** | height for secondary line| Number | 2px
 **secondaryyBottom** | bottom for secondary line| Number | 3px

 

## License

busy-load is licensed under the MIT License - see the LICENSE file for details.


## Author
[Andreas Stephan](https://cafe-serendipity.com)
