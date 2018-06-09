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
