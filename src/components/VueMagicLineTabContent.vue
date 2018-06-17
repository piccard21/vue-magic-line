<template> 
    <div 
    	class="magic-line-item-content" 
      	v-show="isActive"  
        :class="{ active: isActive, disabled: isDisabled }"> 
        <slot/>  
    </div> 
</template>

<script> 
    export default {
      name: 'vue-magic-line-tab',
      props: {
        name: {
          type: String,
          required: true
        }
      },
      data () {
        return {
        	show: false,
          isActive: false,
          isDisabled: false,
        }
      }
    }
</script>

<style lang="scss">  
.magic-line-item-content {
  .disabled {
  } 
}
</style>