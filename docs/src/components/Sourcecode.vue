<template> 
  <div>
    <div class="toggle-code"> 
      <a class="button is-small" @click="toggleCode">See code</a>
    </div>

      <transition name="fade"> 
        <div ref="sourcecode" class="sourcecode" v-show="isOpen">  
            <highlight-code :lang="lang" :code="code"/> 
        </div> 
      </transition> 
  </div>
</template>

<script>
 
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/default.css'; 

Vue.use(VueHighlightJS)

export default {
  props: {
      code: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: 'xml'
      }
  },
  components: { 
    VueHighlightJS
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCode() { 
      this.isOpen = !this.isOpen  
    }
  }
}
</script>

<style lang="scss">
.toggle-code {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
