<template> 
	<div>

  <transition name="slide-fade">
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
} 
</style>