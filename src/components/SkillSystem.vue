<template>
    <div class="SkillSystem">
        <SolarTitle v-if="title_special || hovered != -1" class="solar-title" :text="hoverTitle" 
        :override="false" :default="false" path=""/>
        <SolarTitle class="solar-title" text="My Skills" :override="title_special || hovered != -1" 
        :default="true" path=""/>
        <h1 class="directions" :class="{show: hovered != -1}">Click for More Info</h1>
        <div id="sun">
            <div  class="planet-div" :style="{'--distance': + planet.distance, '--planetColor': + planet.planetColor, 
            '--speed': + planet.speed, '--size': + planet.size}" v-for="(planet, index) in planets" 
            :key="planet.title">
                <div class="planet-animation" :class="{pause: hovered == index}">
                    <div @mouseover="updateTitle(index)" @mouseout="hoverOff" @click="openPage(index)" 
                    class="planet-object" :class="{pause: hovered == index, color1: index % 6 == 0 && hovered == index, color2: index % 6 == 1 && hovered == index, color3: index % 6 == 2 && hovered == index, color4: index % 6 == 3 && hovered == index, color5: index % 6 == 4 && hovered == index, color6: index % 6 == 5 && hovered == index}"> 
                    </div>
                </div>
            </div>
            <div class="orbit" v-for="(planet, index) in planets" :key="index" :style="{'--distance': + planet.distance, '--size': + planet.size}"></div>
            <div class="orbit" v-for="planet in planets" :key="planet.distance" :style="{'--distance': + planet.distance + 5, '--size': + planet.size}"></div>
        </div>
        <div class="sun-shadow-forwards" id="sun-shadow"/>
        <div class="sun-shadow-backwards" id="sun-shadow"/>
        
    </div>
</template>

<script>
import SolarTitle from '@/components/SolarTitle.vue'
export default {
    name: 'SkillSystem',
    props: {
        planets: Array,
        hovered: Number,
        passedTitle: String,
    },
    components:
    {//
        SolarTitle
    },
    data() {
        return {

            title_special: false,
            selftitle: "EMPTY",
        }
    },
    methods: {
        updateTitle(index)
        {
            this.selftitle = this.planets[index].title;
            this.$emit('hovered', index);
            this.title_special = true;
        },
        hoverOff()
        {
            this.selftitle = "";
            this.$emit('hovered', -1);
            this.title_special = false;
        },
        openPage(index)
        {
            this.$emit('pageSelect', index);
        }
    },
    computed:
    {
        hoverTitle() {
            if (this.passedTitle == "")
            return this.selftitle;
            return this.passedTitle;
        }
    },
    created() {
        this.$store.dispatch("changeBackgroundColor", {color: "rgb(51, 51, 51)"});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orbit
{
    --size: 1;
    --distance: 1;
    display: block;
    border: 2px solid rgba(255, 255, 255, 0.062);
    position: absolute;
    z-index: -1000;
    left: calc((var(--distance) * -275% / 2) + 25px);
    top: calc((var(--distance) * -275% / 2) + 25px);
    width: calc(var(--distance) * 275%);
    height: calc(var(--distance) * 275%);
    transform: rotate3d(1, .2, 0, 60deg);
    border-radius: 100%;
}
.SkillSystem {
    --sun-width: 50px;
    display: block;
    width: 98vw;
    margin: 0 auto;
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    background-image: url('../assets/solarsystem/stars.png');
    background-size: 50% auto;
    background-repeat: repeat;
}

.solar-title
{
    position: absolute;
    overflow: normal;
    width: 100%;
    left: 0px;
    transform: rotateX(30deg);
    text-shadow: 1px -20px 5px rgba(0, 0, 0, 0.247);
    padding-top: 18vh;
}

#sun {
    
    display: block;
    background-image: url("../assets/solarsystem/sun_texture.jpg");
    background-position: 50% 40%;
    background-size: 200% 200%;
    width: var(--sun-width);
    height: var(--sun-width);
    position: absolute;
    left: calc((100% - var(--sun-width)) / 2);
    top: calc((100% - var(--sun-width)) / 2);
    border-radius: 100%;
    z-index: 100;
}

#sun-shadow {
    position: absolute;
    display: block;
    filter: blur(3px);
    background-image: url("../assets/solarsystem/sun.png");
    background-size: 100% 100%;
    width: calc(var(--sun-width) * 1.7);
    height: calc(var(--sun-width) * 1.7);
    z-index: 0;
    left: calc((100% - 85px) / 2);
    top: calc((100% - 85px) / 2);
    
    opacity: .7;
}

.sun-shadow-forwards
{
    animation: spin 30s linear 0s infinite;
}

.sun-shadow-backwards
{
    animation: spin 30s linear 0s infinite reverse;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.planet-div {
    --distance: 1;
    --speed: 1;
    --size: 1;
    --planetColor: blue;
    position: absolute;
    cursor: pointer;
    transform: translateX(calc(var(--distance) * -300% + 25px)) translateY(calc(var(--distance) * 0% + 25%));
    animation: front calc(var(--speed) * 10s) linear infinite;
}

.planet-object {
    display: block;
    width: calc(var(--size) * 1px);
    height: calc(var(--size) * 1px);
    border-radius: 100%;
    background-image: radial-gradient(circle at center center, rgb(255, 248, 233) 0% 3%, rgb(66, 65, 60)50% 100%);
    background-size: 300%;
    background-repeat: no-repeat;
    transform-origin: calc(var(--distance) * 300%) center;
    animation: circle calc(var(--speed) * 10s) linear calc(var(--distance) * -20s) infinite, background-animation calc(var(--speed) * 10s) linear calc(var(--distance) * -20s) infinite;
    background-position: 40% 50%;
    box-shadow: -30px 0px 8px rgba(0, 0, 0, 0.158);
}

.planet-animation {
    animation: circle-squeeze calc(var(--speed) * 10s) ease-in-out calc(var(--distance) * -20s) infinite;
}



.pause {
    animation-play-state: paused;
}



.color1 {
    box-shadow: 0px 0px 20px #8105d8;
}
.color2 {
    box-shadow: 0px 0px 20px #e44747;
}
.color4 {
    box-shadow: 0px 0px 20px #1089ff;
}
.color3 {
    box-shadow: 0px 0px 20px #f4ff61;
}
.color5 {
    box-shadow: 0px 0px 20px #fe59d7;
}
.color6{
    box-shadow: 0px 0px 20px #6cfe59;
}







@keyframes circle {
    to {
        transform: rotate(1turn);
    }
}
@keyframes circle-squeeze {
    25% {
        transform: translateY(calc(var(--distance) * 25px));
    }
    75% {
        transform: translateY(calc(var(--distance) * -25px));
    }
}

@keyframes front {
    25% {
        z-index: calc(var(--distance) * -50px);
    }
    75% {
        z-index: calc(var(--distance) * 50px);
    }
}

@keyframes background-animation {
    0% {
        background-position: 35% 50%;
    }
    25% {
        background-position: 50% 60%;
    }
    50% {
        background-position: 35% 50%;
    }   
    75% {
        background-position: 0% 50%;
    }  
    100% {
        background-position: 35% 50%;
    }
}

.directions {
  font-size: 1em;
  opacity: 0;
  width: 100vw;
  left: 0px;
  top: calc(18vh + 95px);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.468);
  position: absolute;
  transition: all .5s ease;
}

.show {
  animation: fade-in .6s ease-in-out;
  opacity: 1;

}

@keyframes fade-in {
    0% {
     opacity: 0;
    transform: scale(.1, .1);
    }
  70% {
    opacity: 0;
    transform: scale(.1, .1);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
