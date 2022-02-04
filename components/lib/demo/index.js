import Demo from './src/Demo.vue';

Demo.install = (Vue) => {
  Vue.component(Demo.name, Demo)
}

export default Demo;