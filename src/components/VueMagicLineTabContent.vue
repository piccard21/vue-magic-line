<template> 
	<div>

  <transition name="fade">
    <div 
    	class="magic-line-item-content" 
      	v-show="isActive"  
      	:class="{ active: isActive }"> 
        <slot/>  
    </div>
  </transition>
		
	</div>
</template>

<script> 
    export default {
      name: 'vue-magic-line-tab',
      props: {
        text: {
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
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>