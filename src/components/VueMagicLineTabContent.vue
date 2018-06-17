<template> 
	<div>
 
    <div 
    	class="magic-line-item-content" 
      	v-show="isActive"  
      	:class="{ active: isActive }"> 
        <slot/>  
    </div> 
		
	</div>
</template>

<script> 
    export default {
      name: 'vue-magic-line-tab',
      props: {
        name: {
          required: true
        }
      },
      data () {
        return {
        	show: false,
          isActive: false,
        }
      },
      mounted() { 
          console.info("inner", this.$el)
      } 
    }
</script>

<style lang="scss">   
</style>