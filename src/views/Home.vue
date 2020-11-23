<template>
  <div class="home">
    <Menu :opacity="1" curr="home"/>
    <MainScreen v-for="(screen, index) in screens" :key="index" :title="screen.title" :description="screen.description" :EXIST="index == currScreen || index == lastScreen" :override="index != currScreen || openPage" 
    :class="{show: index == currScreen, hide : index != currScreen}" :path="screen.path" />
    <div id="home-button-div">
      <div :class="{active: index == currScreen, inactive : index != currScreen}" v-for="(screen, index) in screens" :key="index" @click="changeScreen(index)" class="home-button"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainScreen from '@/components/MainScreen.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    MainScreen,
    Menu
  },
  data() {
    return {
      screens: [
        {title: "Hi, I'm Andrew", description: "Welcome to my website!", active: false, path: ""},
        {title: "BYU CS Undergrad", description: "Currently finshing up my junior year.", active: false, path: "resume"},
        {title: "I Love Coding", description: "Check out some of my solo projects!", active: false, path: "portfolio"},
        {title: "Diverse Skills", description: "Front and Back-End, Videography, Music amd Journalism", active: false, path: "skills"},
        {title: "Let's Get in Touch", description: "For Work / Music / Memes", active: false, path: "contact"}
      ],
      currScreen: 0,
      lastScreen: 0,
      time: 13,
      autoChangeInterval: null,
      openPage:true,
    }
  },
  methods: {
    changeScreen(index)
    {
      this.lastScreen = this.currScreen;
      this.currScreen = index;
      this.time = 30;
      let colors = ["rgb(255, 195, 0)", "rgb(239, 75, 75)","rgb(2, 201, 201)", "rgb(51, 51, 51)", "rgb(72, 76, 127)"];
      this.$store.dispatch("changeBackgroundColor", {color: colors[this.currScreen % colors.length]});
    },
    autoChange()
    {
      this.openPage = false;
      if (this.$router.currentRoute.name != "home")
      {
        clearInterval(this.autoChangeInterval);
      }
      if (this.time > 0)
      {
        this.time -= 1;
        if (this.time == 0)
        {
          this.time = 13;
          let newIndex = this.currScreen + 1;
          if (newIndex > this.screens.length - 1)
          {
            newIndex = 0;
          }
          this.lastScreen = this.currScreen;
          this.currScreen = newIndex;
          let colors = ["rgb(255, 195, 0)", "rgb(239, 75, 75)","rgb(2, 201, 201)", "rgb(51, 51, 51)", "rgb(72, 76, 127)"];
          this.$store.dispatch("changeBackgroundColor", {color: colors[this.currScreen % colors.length]});
        }
      }
    }
  },
  created() {
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(255, 195, 0)"});
    this.autoChangeInterval = setInterval(this.autoChange, 500);
  }

}
</script>

<style scoped>
.home
{
  position: relative;
}

.MainScreen {
  position: absolute;
  top: 25vh;
  left: 0;
  display: block;
  width: 100vw;
  transition: all .5s ease;
}

#home-button-div
{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 30px;
  z-index: 50;
}

.home-button {
  display: block;
  margin: 0 10px;
  border-radius: 100%;
  transition: all .2s ease;
}


.active {
  background-color: #ffffff;
  width: 26px;
  height: 26px;
  border: 0px;
}

.inactive {
  background-color: #ffffff00;
  width: 16px;
  height: 16px;
  border: 5px solid #ffffff;
}

.inactive:hover {
  background-color: #ffffff;
  border: 0px solid  #ffffff;
  width: 26px;
  height: 26px;
}

.hide {
  transform: rotate(20deg) translate(20px 20px);
  opacity: 1;
  z-index: 0;
  text-shadow: 2px 2px 5px #00000000; 
}

.show {
  opacity: 1;
  z-index: 100;
}


</style>
