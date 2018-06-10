import VueMagicLine from './VueMagicLine';
import VueMagicLineTabContent from './components/VueMagicLineTabContent'

export default {
    install(Vue) {
	    Vue.component('vue-magic-line', VueMagicLine);
	    Vue.component('vue-magic-line-tab', VueMagicLineTabContent);
    },
};

export { VueMagicLine, VueMagicLineTabContent };