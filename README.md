# vue-magic-line

> A tabs-component for Vue.

## Demo

[See here for examples](https://piccard21.github.io/vue-magic-line)


## Configuration


### Install component


#### Globally

``` 
import VueMagicLine from 'vue-magic-line'

Vue.use(VueMagicLine)
``` 

#### Locally

``` 
import {VueMagicLine, VueMagicLineTab} from 'vue-magic-line';

    export default {
      components: {
        VueMagicLine,
        VueMagicLineTab
      },
      ...
``` 

### Template

``` 
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
``` 


## Properties

### vue-magic-line

Property | Description | Value | Default value
--- | --- | --- | ---
 **secondary** | show secondary line | Boolean | true
 **parent** | apply to parent and not to link | Boolean | true
 **magic-line-wrapper-css** | CSS for  class **magic-line-wrapper**| Object | {}
 **magic-line-item-wrapper-css** | CSS for  class **magic-line-item-wrapper**| Object | {}
 **magic-line-item-css** | CSS for  class **magic-line-item**| Object | {}
 **magic-line-item-link-css** | CSS for  class **magic-line-item-link**| Object | {}
 **magic-line-content-wrapper-css** | CSS for  class **magic-line-content-wrapper**| Object | {}
 **primary-color** | color for primary line| String | rgb(0, 188, 212)
 **primary-height** | height for primary line| Number | 3px
 **primary-top** | add some margin to primary line| Number | 3px
 **secondary-color** | color for secondary line| String | rgba(211, 211, 211, 0.4)
 **secondary-height** | height for secondary line| Number | 2px
 **secondary-top** | add some margin to secondary line| Number | 3px
 **duration** | duration for magic-line transition in seconds| Number | 0.3


### vue-magic-line-tab

Property | Description | Value | Default value
--- | --- | --- | ---
 **active** | set active tab | Boolean | true
 **disabled** | disable tab | Boolean | false


## Events

Event | Description | Parameters
--- | --- | --- 
 **before-set-primary** | before positioning primary line | primary-line element
 **set-primary** | after positioning primary line | primary-line element
 **before-set-secondary** | before positioning secondary line | secondary-line element
 **set-secondary** | after setting positioning line | secondary-line element




## License

vue-magic-line is licensed under the MIT License - see the LICENSE file for details.


## Author
[Andreas Stephan](https://cafe-serendipity.com)
