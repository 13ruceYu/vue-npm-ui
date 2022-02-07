<template>
  <div class="bo-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="bo-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="bo-card-summary">
      {{ summary }}
    </div>
    <div v-else class="bo-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "BoCard",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="sass" scoped>
@import './card.scss';
</style>
