import Card from './src/Card.vue';

Card.install = (Vue) => {
  Vue.component(Card.name, Card)
}

export default Card;