<template>
  <div class="contact">
    <Menu  :opacity="0" curr="contact"/>
    <div id="firstscreen">
      <div id="bottom">
        <div id="instruments">
          <div class="relative">
          <img class="instrument" :class="{load: load}" v-if="w > 1100 && h > 670" id="piano" src="../assets/contact/MusicalInstruments/piano3.svg"/>
          <img class="instrument" :class="{load: load}" v-if="w > 1100 && h > 670" id="drums" src="../assets/contact/MusicalInstruments/drums.svg"/>
          </div>
        </div>
        <img class="phone" :class="{load: load, marginextra: w > 1100}" src="../assets/contact/phone/phone.svg"/>
        <ContactTitle id="contacttitle" text="Bother me whenever" :override="load"></ContactTitle>
      </div>
    </div>
    <h1 class="first" :class="{fontlow: w < 500}">andrew@youngshome.com</h1>
    <h1 :class="{fontlow: w < 500}">(650) 999 1673</h1>
    <div id="links">
      <a class="link" id="github" href="https://github.com/andyruwruw"/>
      <a class="link" id="linkedin" href="https://www.linkedin.com/in/andrew-young-3322b3133/"/>
      <a class="link" id="instagram" href="https://www.instagram.com/andyruwruw/"/>
      <a class="link" id="spotify" href="https://open.spotify.com/user/12146574234?si=yIdUOfPjQbWkDQEOfe3fhA"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import ContactTitle from '@/components/ContactTitle.vue'

export default {
  name: 'contact',
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      interval: null,
      loadInterval: null,
      load: true,
    }
  },
  components: {
    Menu,
    ContactTitle
  },
  methods: {
    checkWidth() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      if (this.$router.currentRoute.name != "contact") {
        clearInterval(this.interval);
      }
    },
    loaded() {
      this.load = false;
      clearInterval(this.loadInterval);
    }
  },
  created() {
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(255,165,0)"});
    this.interval = setInterval(this.checkWidth, 100);
    this.loadInterval = setInterval(this.loaded, 1400);
  }
}
</script>

<style scoped>

#relative {
  position: relative;
}

#firstscreen {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  margin-bottom: 10vh;
}

@keyframes pop-in {
  from {
    transform: scale(.1, .1);
    opacity: 0;
  }
}

@keyframes pop-in-left {
  from {
    transform: translateX(-50vw) scale(.1, .1);
    opacity: 0;
  }
}

@keyframes pop-in-right {
  from {
    transform: translateX(50vw) scale(.1, .1);
    opacity: 0;
  }
}

@keyframes pop-in-up {
  from {
    transform: translateY(50vh) scale(.1, .1);
    opacity: 0;
  }
}

#bottom {
  width: 100%;
}

.fontlow {
  font-size: 2em;
}

.first.fontlow {
  padding-top: 120px;
}
@media screen and (min-width: 1px) {
  #bottom {
    position: relative;
  }
}

@media screen and (min-width: 635px) {
  #bottom {
    position: absolute;
    bottom: 10px;
  }
}

.phone {
  display: block; 
  width: 250px;
  margin: 70px auto;
  
}

#contacttitle.load {
  animation: pop-in-up 1s ease;
}

.phone.load {
  animation: pop-in 1s ease;
}

.marginextra {
  margin-top: 450px;
}

.phone:hover {
  animation: shake 1s ease;
}

@keyframes shake {
  19% {transform: rotate(0deg);}
  20% {transform: rotate(5deg);}
  39% {transform: rotate(5deg);}
  40% {transform: rotate(-5deg);}
  59% {transform: rotate(-5deg);}
  60% {transform: rotate(5deg);}
  79% {transform: rotate(5deg);}
  80% {transform: rotate(-5deg);}
  99% {transform: rotate(-5deg);}
}

.instrument {
  z-index: 50;
  position: absolute;
}

#instruments {
  position: absolute;
  display: block;
  top: -100px;
  width: 100%;
}

.instrument:hover {
  animation: play 2s linear infinite;
}

@keyframes play {
  9% { transform: rotate(0deg) scale(1, 1); }
  10% { transform: rotate(2deg) scale(1.02, 1.02) ; }
  19% { transform: rotate(2deg) scale(1.02, 1.02); }
  20% { transform: rotate(-2deg) scale(1, 1); }
  29% { transform: rotate(-2deg) scale(1, 1); }
  30% { transform: rotate(2deg) scale(1.02, 1.02); }
  39% { transform: rotate(2deg) scale(1.02, 1.02); }
  40% { transform: rotate(-2deg) scale(1, 1); }
  49% { transform: rotate(-2deg) scale(1, 1); }
  50% { transform: rotate(2deg) scale(1.02, 1.02); }
  59% { transform: rotate(2deg) scale(1.02, 1.02); }
  60% { transform: rotate(-2deg) scale(1, 1); }
  69% { transform: rotate(-2deg) scale(1, 1); }
  70% { transform: rotate(2deg) scale(1, 1); }
  79% { transform: rotate(2deg) scale(1, 1); }
  80% { transform: rotate(-2deg) scale(1.02, 1.02); }
  89% { transform: rotate(-2deg) scale(1.02, 1.02); }
  90% { transform: rotate(2deg) scale(1, 1); }
  99% { transform: rotate(2deg) scale(1, 1); }
}

#piano {
  max-width: 700px;
  left: -60px;
  
}
#piano.load {
  animation: pop-in-left 1.4s ease;
}

#drums {
  max-width: 700px;
  right: -60px;
  
}

#drums.load {
  animation: pop-in-right 1.4s ease;
}

#trumpet {
  width: 400px;
  left: -450px;
  top: -80px;
  transform: rotate(80deg);
}

.contact {
  display: block;
  width: 100%;
  margin: 0;
  overflow: hidden;
  position: relative;
}

#center {
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  width: 95vw;
  max-width: 800px;
  min-height: 20px;
}

.link {
  display: block;
  filter: invert(100%);
  width: 60px;
  height: 60px;
  background-size: 100% 100%;
  background-position: center;
  margin: 20px;
  transition: all .3s ease;
  
}

.link:hover {
  transform: scale(1.2, 1.2) rotate(360deg);
}


@keyframes slide-rotate 
{
  0% 
  {
    transform: translateX(-200px) rotate(0deg);
  }
  100% 
  {
    transform: translateX(0vw) rotate(360deg);
  }
}


#github {
  background-image: url("../assets/logos/github.png");
}

#linkedin {
  background-image: url("../assets/logos/linkedin.png");
}

#instagram {
  background-image: url("../assets/logos/instagram.png");
}

#spotify {
  background-image: url("../assets/logos/spotify.png");
}

#links {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 300px;
}

h1 {
  margin: 50px 0px;
  color: black;
  font-size: 3em;
  font-family: 'Neucha', cursive;
}


</style>
