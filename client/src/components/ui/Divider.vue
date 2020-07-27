<template>
  <svg
    :width="width"
    :height="height"
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
  name: 'Divider',
  props: {
    width: {
      type: Number,
      default: 140,
    },
    height: {
      type: Number,
      default: 15,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    points() {
      let points = "";
      for (let i = 0; i < (this.width / 5); i++) {
        points += `${(this.width / 5) * i},0 `;
        points += `${(this.width / 10) * ((i * 2) + 1)},${this.height} `;
      }
      return points;
    },
  },
};
</script>