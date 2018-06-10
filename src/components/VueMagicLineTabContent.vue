<template> 
    <div class="magic-line-item-content" 
      v-show="isActive" 
      :class="{ active21: isActive }"> 
        <slot/>  
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
          isActive: false,
        }
      },
      mounted() { 
      } 
    }
</script>

<style scoped lang="scss">  
</style>