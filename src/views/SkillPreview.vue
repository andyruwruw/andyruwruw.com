<template>
  <div  :opacity="1" class="skillpreview">
    <Menu curr="skillspreview"/>
    <SkillPreview @reload="reload" v-if="show" class="skillpreview"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import SkillPreview from '@/components/SkillPreview.vue'

export default {
  name: 'skillpreview',
  components: {
    Menu,
    SkillPreview
  },
  data() {
      return {
          show: false,
          interval: null,
      }
  },
  methods: {
    async reload(val) {
      this.show = false;
      await this.$store.dispatch('changeIndex', {index: parseInt(val, 10)});
      this.interval = setInterval(this.load(val), 100);
    },
    load(val) {
      clearInterval(this.interval);
      this.$router.push("/skills/" + val + '/' + this.skills[parseInt(val, 10)].title);
      this.show = true;
    }
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    }
  },
  async created() {
      await this.$store.dispatch('changeIndex', {index: this.$route.params.num});
      this.show = true;
  }
}
</script>

<style scoped>
</style>