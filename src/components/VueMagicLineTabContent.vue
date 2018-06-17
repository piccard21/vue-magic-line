<template> 
  <transition name="fade">
    <div 
    	class="magic-line-item-content" 
      	v-show="isActive"  
         :key="Math.floor(Math.random()*10000)"
        :class="{ active: isActive, disabled: isDisabled }"> 
        <slot/>  
    </div> 
  </transition>
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


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>