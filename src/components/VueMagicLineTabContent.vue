<template> 
	<div>
 
    <div 
    	class="magic-line-item-content" 
      	v-show="isActive"  
        :class="{ active: isActive, disabled: isDisabled }"> 
        <slot/>  
    </div> 
		
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
      },
      mounted() { 
          console.info("inner", this.$el)
      } 
    }
</script>

<style lang="scss">  
  .disabled {
    color: red; 
    opacity: 0.5;  
  } 
</style>