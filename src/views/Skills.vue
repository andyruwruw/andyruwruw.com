<template>
  <div class="skills">
    <Menu  :opacity="0" curr="skills"/>
    <SkillSystem  :passedTitle="passedTitle" @pageSelect="selectPage" @hovered="setHover" 
    class="enter-animation-solar-system" :planets="skills" :hovered="hovered" v-if="start"/>
    <div :class="{footer: start}" id="skill-tabs">
      
      <div @click="selectPage(index)" class="skill-button enter-animation-tabs" @mouseover="setHover(index)" 
      @mouseout="setHover(-1)" :class="{hovered: hovered == index}" v-for="(skill, index) in skills" 
      :key="skill.title">
        {{skill.title}}
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import SkillSystem from '@/components/SkillSystem.vue'

export default {
  name: 'skills',
  components: {
    Menu,
    SkillSystem,
  },
  data() {
    return {
      hovered: -1,
      w: window.innerWidth,
      start: false,
      interval: null,
      passedTitle: "",
      page: -1,
    }
  },
  methods: 
  {
    setHover(val) {
      this.hovered = val;
      if (val != -1)
      this.passedTitle = this.skills[val].title;
      else
      this.passedTitle = "";
    },
    async selectPage(index)
    { 
      await this.$store.dispatch('changeIndex', {index: index});
      this.$router.push('skills/' + index + "/" + this.skills[this.index].title);
    },
    startNow()
    {
      this.start = true;
      clearInterval(this.interval);
    }
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
    index() {
      return this.$store.state.index;
    }
  },
  async created()
  {
    this.page = -1;
    await this.$store.dispatch('changeIndex', {index: 0});
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(51, 51, 51)"});
    this.interval = setInterval(this.startNow, 100);
  }
}
</script>

<style scoped>
.skills {
  position: relative;
}

.skillpreview {
  position: absolute; 
  left: 0px;
}
.enter-animation-solar-system {
  animation: enter .5s ease;
}

.enter-animation-tabs {
  animation: entertab .7s ease;
}

@keyframes enter {
  from {
    transform: scale(.1, .1);
    opacity: 0;
  }
  to {
    transfrom: scale(1, 1);
    opacity: 1;
  }
}

@keyframes entertab {
  from {
    transform: scale(.1, .1);
    opacity: 0;
  }
  to {
    transfrom: scale(1, 1);
    opacity: .5;
  }
}

.footer {
  position: absolute;
  top: 88vh;
  z-index: 200;
  width: 100vw;
  margin-bottom: 50px;
}

.toptabs {
  width: 100vw;
  background-color: black;
}

  #skill-tabs {
    transform: translateY(-48vh);
  }


@media screen and (min-width: 600px) {
  #skill-tabs {
    transform: translateY(0px);
  }
  .skill-button {
    background-color:rgba(181, 181, 181, 0.733) !important;
    opacity: .5 !important;
  }
}

.skill-button {
  display: inline-block;
  padding: 3px 10px;
  padding-bottom: 0px;
  min-width: 40px;
  font-size: .8em;
  cursor: pointer;
  background-color:rgb(231, 231, 231);
  color: rgb(51, 51, 51);
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  line-height: 28px;
  border-radius: 5px;
  opacity: .8;
  transform: scale(1, 1);
  transition: all .3s ease;
  margin: 10px 10px;
}

.hovered {
  transform: scale(1.2, 1.2) !important;
  
  opacity: 1 !important;
  background-color: white !important;
}



</style>
