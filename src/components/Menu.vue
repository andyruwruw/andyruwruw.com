<template>
  <div class="Menu">
    <div :class="{dark: dark}" id="top-right" :style="{background: backgroundColor}">
        <MenuButton text="Home" path="home" :curr="curr"/>
        <h1>/</h1>
        <MenuButton text="Portfolio" path="portfolio" :curr="curr"/>
        <h1>/</h1>
        <MenuButton text="Skills" path="skills" :curr="curr"/>
        <h1>/</h1>
        <MenuButton text="Experience" path="experience" :curr="curr"/>
        <h1>/</h1>
        <MenuButton text="Contact" path="contact" :curr="curr"/>
    </div>
    <div :class="{dark: dark}" id="footer">
      <div @click="sound(true)" v-if="!mute" class="footer-button" id="mute"/>
      <div @click="sound(false)" v-if="mute" class="footer-button" id="unmute"/>
      <a href="https://github.com/andyruwruw/Home-Page" @click="sound(true)" class="footer-button" id="github"/>
    </div>
  </div>
</template>

// https://icons8.com/icons Icons by Icons8

<script>
import MenuButton from '@/components/MenuButton.vue'

export default {
  name: 'Menu',
  props: {
    curr: String,
    opacity: Number,
    dark: Boolean,
  },
  data() {
    return {
      setopacity: 0,
      interval: null,
    }
  },
  components:
  {
    MenuButton
  },
  methods: {
    sound(val) {
      if (val)
        this.$store.dispatch("soundOn");
      else
        this.$store.dispatch("mute");
    },
    opacityChange() {
      if (this.setopacity < this.opacity)
      {
        this.setopacity += .1;
      }
      else {
        clearInterval(this.interval);
      }
    }
  },
  computed:
  {
    mute()
    {
      return this.$store.state.sound;
    },
    backgroundColor() {
      let background = this.$store.state.backgroundColor;
      background = background.slice(3, -1);
      background = "rgba" + background + "," + this.setopacity + ")"
      return background;
    },
  },
  created() {
    this.interval = setInterval(this.opacityChange, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-right
{
  position: fixed;
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  flex-wrap: wrap;
  transition: all .3s ease;
  right: 0px;
  top: 0px;
  z-index: 200;
  width: 100vw;
  max-width: 100vw;
  border-radius: 10px;
}

#footer
{
  display: flex;
  justify-content: right;
  position: fixed;
  z-index: 200;
  bottom: 20px;
  right: 10px;
}

.footer-button
{
  display: block;
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  opacity: .8;
  transition: all .5s ease;
}

.footer-button:hover
{
  transform: scale(1.1, 1.1) rotate(360deg);
  opacity: 1;
}

#mute 
{
  background-image: url("../assets/logos/mute.png");
}

.dark .footer-button {
  filter: invert(100%);
}

#unmute 
{
  background-image: url("../assets/logos/soundon.png");
}

#github 
{
  background-image: url("../assets/logos/github.png");
}

h1 
{
  margin: 0 10px;
  font-size: 1.3em;
}

.dark h1 {
  color: rgb(24, 25, 29);
}
</style>
