<template>
  <div class="home">
    <intro />

    <divider :class="$style['intro-divider']"/>

  </div>
</template>

<script>
import Intro from '@/components/home/Intro.vue';
import Divider from '@/components/ui/Divider.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    Divider,
  }
}
</script>

<style module>
.intro-divider {
  display: block;
  margin: 100px auto;
}
</style>
