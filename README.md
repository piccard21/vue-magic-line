# vue-component-skeleton

> Starter for component-development with VueJS
 
## Features

- create smaller Lodash builds with the **lodash-webpack-plugin** by cherry-picking Lodash modules
- export the component as a library 

``` 
<script type="text/javascript" src="vue-my-component.js"></script>
<script type="text/javascript">
  Vue.use(VueMyComponent);
</script>
``` 
- import your component in a Node.js-based development 

```
import VueMyComponent from 'vue-my-component'
``` 
- use SCSS inside your SFC


## Build Setup

``` bash
# install dependencies
yarn install

# watch while development
yarn run watch

# build for production with minification
yarn run build
```

## Configuration

- change the filename **VueComponentSkeleton.vue** to yours, i.e. **VueMyComponent.vue**
- replace inside the following files **vue-component-skeleton** with your wanted name
- do it as well for **VueComponentSkeleton**
- files:
	- install.js
	- package.json
	- webpack.config.js

## Ready for development

- link the package

``` 
yarn link
``` 

- goto a project of yours wich will add the component
``` 
cd ../project
yarn link "vue-my-component"
yarn add vue-my-component
``` 

- now you can develop your component by
``` 
cd vue-my-component
yarn watch
``` 

... while you can test it live inside another project

``` 
cd ../project
yarn run dev
``` 


TODO

- strich an li und nicht a 
- doc: flex
- justify-content als prop?
- super long



``` 

  <template> 
    <div class="my-awesome-tabs">
      
      <vue-magic-line :secondary="true" primary-color="red" :primary-height="10" :primary-bottom="-20">
          <vue-magic-line-tab name="First tab" disabled>
              This is the content of the first vue-magic-line-tab
          </vue-magic-line-tab>
          <vue-magic-line-tab name="Second tab" active>
              This is the content of the second vue-magic-line-tab
          </vue-magic-line-tab>
          <vue-magic-line-tab name="Third tab" >
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


</style>
