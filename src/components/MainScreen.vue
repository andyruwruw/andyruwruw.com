<template>
    <div class="MainScreen">
        <Title v-if="EXIST" :text="title" :override="override"/>
        <Description v-if="EXIST" :text="description" :override="override"/>
        <button class="learnmore" v-if="!override && path != '' && EXIST" :style="{color: storeBackgroundColor}" @click="route">Learn More</button>
    </div>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'MainScreen',
  props: {
    title: String,
    description: String,
    override: Boolean,
    path: String,
    EXIST: Boolean
  },
  components: 
  {
    Description,
    Title
  },
  methods: {
    route()
    {
      this.$router.push({name: this.path});
    }
  },
  computed: 
  {
    storeBackgroundColor()
    {
      return this.$store.state.backgroundColor;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description
{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    max-width: 700px;
}

button {
  animation: fade-in 1s ease;
  margin-top: 15px;
  margin-bottom: 50px;
  background-color: white;
  border: 0px;
  font-size: 1.5em;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all .3s ease;
  color: rgb(255, 195, 0);
  font-family: 'Lovelo-Black', Fallback, sans-serif;
}

button:hover {
  transform: scale(1.1 1.1);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.MainScreen {
  z-index: 0;
  margin-bottom: 100px;
}

</style>
