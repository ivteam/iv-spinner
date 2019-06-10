import spinner from "./App.vue";

export default {
  install(Vue, options) {
    Vue.prototype.$spin.size = options.size;
    Vue.component("iv-spinner", spinner);
  }
}