<template>
  <svg
    :width="width"
    height="2"
    version="2"
    xmlns="http://www.w3.org/2000/svg">
    <polyline
      :points="points"
      :stroke="color"
      fill="none"
      stroke-width="1"/>
  </svg>
</template>

<script>
export default {
  name: 'Separator',
  props: {
    width: {
      type: Number,
      default: 140,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    points() {
      return `0,1 ${this.width},1`;
    },
  },
};
</script>