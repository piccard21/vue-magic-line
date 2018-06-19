import VueMagicLine from './VueMagicLine';
import VueMagicLineTab from './components/VueMagicLineTab'

export default {
    install(Vue) {
	    Vue.component('vue-magic-line', VueMagicLine);
	    Vue.component('vue-magic-line-tab', VueMagicLineTab);
    },
};

export { VueMagicLine, VueMagicLineTab };