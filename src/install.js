import VueMagicLine from './VueMagicLine';
import VueMagicLineTabContent from './components/VueMagicLineTabContent'

export default {
    install(Vue) {
    	console.info("CALLED",VueMagicLineTabContent)
	    Vue.component('vue-magic-line', VueMagicLine);
	    Vue.component('vue-magic-line-tab', VueMagicLineTabContent);
    },
};

export { VueMagicLine, VueMagicLineTabContent };