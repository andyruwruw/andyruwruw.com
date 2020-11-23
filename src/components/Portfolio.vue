<template>
<div id="portfolio">
  <span id="portfolio-shadow"></span>
  <div id="portfolio-div">
    <h1 id="portfolio-title">A growing portfolio!</h1>
    <div class="portfolio-flex">

      <a href="http://todo.andrewdanielyoung.com/" target="_blank" class="link" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease">
        <div class="trigger"></div>
        <div class="website-hover-info">
          <p class="website-title">To-Do List</p>
          <p>I couldn't find a to-do list I loved, so I made one! Productivity at last.</p>
        </div>
        <div class="website-inside-image" id="todo-inside"></div>
        <div class="website-background-image" id="todo-background"></div>
        <div class="website-shadow-right"></div>
        <div class="website-shadow-bottom"></div>
      </a>

      <a href="http://chess.andrewdanielyoung.com/" target="_blank" class="link" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease">
        <div class="trigger"></div>
        <div class="website-hover-info">
          <p class="website-title">Express Chess</p>
          <p>I challenged myself to create a fully functioning multiplayer chess platform.</p>
        </div>
        <div class="website-inside-image" id="expresschess-inside"></div>
        <div class="website-background-image" id="expresschess-background"></div>
        <div class="website-shadow-right"></div>
        <div class="website-shadow-bottom"></div>
      </a>


      <a href="http://sovereign2.andrewdanielyoung.com/" target="_blank" class="link" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease">
        <div class="trigger"></div>
        <div class="website-hover-info">
          <p class="website-title">Sovereign 2</p>
          <p>I decided to create a functioning game! Battle the odds, rise from a small villiage to kingdom.</p>
        </div>
        <div class="website-inside-image" id="sovereign2-inside"></div>
        <div class="website-background-image" id="sovereign2-background"></div>
        <div class="website-shadow-right"></div>
        <div class="website-shadow-bottom"></div>
      </a>




    </div>
  </div>
</div>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'portfolio',
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  created() {
    AOS.init();
  }
}
</script>

<style scoped>
p {
  font-weight: bolder;
}

.website-title {
  font-size: 1.2em;
}

#portfolio-shadow {
  position: absolute;
  top: calc(100vh - 6px);
  left: 0px;
  z-index: -1;

  display: block;
  width: 100%;
  height: 10px;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.308))
}

#portfolio-div {
  display: block;
  width: 100%;
  background-color: rgb(240, 240, 240);
}

#portfolio-title{
  color: rgb(197, 197, 197);
  padding-top: 70px;
  font-size: 2.5em;
}

.portfolio-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 100px;
}



.link {
  display: block;
  max-width: 250px;
  max-height: 250px;
  min-width: 200px;
  min-height: 200px;
  width: calc(20vw);
  height: calc(20vw);
  position: relative;
  margin: 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px grey;
}

.website-hover-info {
  z-index: 5;
  position: absolute;
  width: 86%;
  left: 7%;
  height: 100%;
  opacity: 0;
  transition: all .6s ease;
  color: black;
}

.trigger {
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.trigger:hover ~ .website-hover-info {
  opacity: 1;
}

.website-inside-image {
  z-index: 0;
  display: block;
  max-width: 250px;
  max-height: 250px;
  min-width: 200px;
  min-height: 200px;
  width: calc(20vw);
  height: calc(20vw);
  position: absolute;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all .7s ease;
}

.trigger:hover ~ .website-inside-image {
  transform: scale(1.2, 1.2);
  opacity: .2;
}

.website-background-image {
  z-index: -5;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all .7s ease;
  border-radius: 20px;
}

.trigger:hover ~ .website-background-image {
  opacity: .3;
}

#sovereign2-background {
  background-image: url("../assets/websites/sovereign_background.png");
}

#todo-background {
  background-image: url("../assets/websites/todo_background.png");
}

#expresschess-background {
  background-image: url("../assets/websites/expresschess_background.png");
}

#todo-inside {
  background-image: url("../assets/websites/todo_inside.png");
}

#expresschess-inside {
  background-image: url("../assets/websites/expresschess_inside.png");
}



#sovereign2-inside {
  background-image: url("../assets/websites/sovereign_inside.png");
}

.spin-in {
  animation: spin .5s ease;
}

@keyframes spin {
  0% 
  {
    transform: scale(.3, .3) rotate(360deg);
    opacity: 0;
  }  
  100%
  {
    transform: scale(1, 1) rotate(0deg);
    opacity: 1;
  }  
}

</style>