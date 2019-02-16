<template> 
  <div class="default-01 content">
    <h6 class="title is-5">Control tabs by code</h6> 
    <p>
      Set a tab as active or disable it by Vue.  
    </p>

    <div class="my-awesome-tabs">
      
      <vue-magic-line>
        <vue-magic-line-tab name="First tab" >
            This is the content of the first vue-magic-line-tab
        </vue-magic-line-tab>
        <vue-magic-line-tab name="Second tab" active>
            <b>This is the content of the second vue-magic-line-tab</b>
        </vue-magic-line-tab>
        <vue-magic-line-tab name="Third tab">
            This is the content of the third vue-magic-line-tab
        </vue-magic-line-tab> 
        <vue-magic-line-tab name="Fourth tab">
            <i>This is the content of the fourth vue-magic-line-tab</i>
        </vue-magic-line-tab>
        <vue-magic-line-tab name="Fifth tab">
            This is the content of the fifth vue-magic-line-tab
        </vue-magic-line-tab>
        <vue-magic-line-tab name="Sixth tab">
            <p>This is the content of the sixth vue-magic-line-tab</p>
        </vue-magic-line-tab> 
      </vue-magic-line> 
 
      <p> 
        <div class="field is-grouped is-grouped-left">
          <p class="control">
           <input class="input" type="number" min="0" :max="tabsCount" v-model.number="tabDisable">
          </p>
          <p class="control">
           <button @click="toggleDisable" class="button">Toggle Disable</button>
          </p>
        </div>
        <div class="field is-grouped is-grouped-left">
          <p class="control">
              <input class="input" type="number" min="0" :max="tabsCount" v-model.number="tabActive">
          </p>
          <p class="control">
              <button @click="toggleActive" class="button">Set Active</button>
          </p>
        </div> 
      </p>

    </div>

    <sourcecode :code="code" lang="javascript" /> 
    
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
export default {
  data () {
    return {
      tabsCount: 0,
      tabDisable: 2,
      tabActive: 0
    }
  },
  computed: {
    vueMagicLine() {
      return this.$children.find(c => c.$options.name === 'vue-magic-line')
    },
    disabledTabs() {
      return this.vueMagicLine.disabledTabs
    }
  },
  methods: {
    toggleDisable() {
      if(this.disabledTabs.indexOf(this.tabDisable) > -1) {
        this.disabledTabs.splice(this.disabledTabs.indexOf(this.tabDisable), 1); 
      } else {
        this.disabledTabs.push(this.tabDisable); 
      }
    },
    toggleActive() { 
      if(this.disabledTabs.indexOf(this.tabActive) > -1) {
        console.info("disabled")
      } else {
        this.vueMagicLine.activeIndex = this.tabActive
      }
    }
  },
  mounted() {
    this.tabsCount = this.vueMagicLine.$children.length-1
  }
}
  `,
          tabsCount: 0,
          tabDisable: 2,
          tabActive: 0
    }
  },
  computed: {
    vueMagicLine() {
          return this.$children.find(c => c.$options.name === 'vue-magic-line')
    },
    disabledTabs() {
      return this.vueMagicLine.disabledTabs
    }
  },
  methods: {
    toggleDisable() {
      if(this.disabledTabs.indexOf(this.tabDisable) > -1) {
        this.disabledTabs.splice(this.disabledTabs.indexOf(this.tabDisable), 1); 
      } else {
        this.disabledTabs.push(this.tabDisable); 
      }
    },
    toggleActive() { 
      if(this.disabledTabs.indexOf(this.tabActive) > -1) {
        console.info("disabled")
      } else {
        this.vueMagicLine.activeIndex = this.tabActive
      }
    }
  },
  mounted() {
    this.tabsCount = this.vueMagicLine.$children.length-1
  }
}
</script>

<style lang="scss" scoped>
</style>
