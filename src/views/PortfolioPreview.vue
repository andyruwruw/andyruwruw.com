<template>
  <div class="portfoliopreview">
    <Menu  :opacity="1" curr="portfoliopreview"/>
    <div v-if="show" id="main">
      <div id="navigation">
        <div class="navbutton" @click="navigate(-1)" id="goleft"></div>
        <div class="navbutton" @click="navigate(1)" id="goright"></div>
        <div class="navbutton" @click="navigate(0)" id="back"></div>
      </div>
      <div v-if="item.imagenum > 0" id="carousel">
        <div id="main-image">
          <img :src="publicPath + imagepath" />
          <img class="old" v-if="showold" :src="publicPath + imageindexoldpath" />
        </div>
        <div class="flex-carousel">
          <img @click="loadPhoto(true, 1)" class="option" :src="publicPath + altImagePath1" />
          <img @click="loadPhoto(true, 2)" class="option" :src="publicPath + altImagePath2" />
          <img @click="loadPhoto(true, 3)" class="option" :src="publicPath + altImagePath3" />
        </div>
      </div>
      <div id="details">

        
        <h2>Project</h2>
        <h1>{{item.title}}</h1>
        <h2>About</h2>
        <p v-for="(line, index) in item.largedescription" :key="'description' + index">{{line}}</p>
        <div id="buttons">
          <a :href="item.github">Github</a>
          <a :href="item.link">Let's Go!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'portfoliopreview',
  components: {
    Menu,
  },
  data() {
      return {
          show: false,
          showold: false,
          interval: null,
          oldinverval: null,
          imageindex: 0,
          imageindexold: 0,
          extra: [],
          publicPath: process.env.BASE_URL,
      }
  },
  methods: {
    navigate(val) {
      if (val == 0)
      {
        this.$router.push({name: "portfolio"});
      }
      else {
        let newIndex = this.index + val;
        if (newIndex < 0)
        {
          newIndex = this.portfolio.length - 1;
        }
        else if (newIndex >= this.portfolio.length)
        {
          newIndex = newIndex % this.portfolio.length;
        }
        this.reload(newIndex);
      }
    },
    async reload(val) {
      this.show = false;
      await this.$store.dispatch('changeIndex', {index: parseInt(val, 10)});
      this.interval = setInterval(this.load(val), 100);
    },
    load(val) {
      clearInterval(this.interval);
      this.$router.push("/portfolio/" + val + '/' + this.portfolio[parseInt(val, 10)].title);
      this.show = true;
    },
    loadPhoto(bool, num)
    {
      clearInterval(this.oldinverval);
      this.showold = false;
      let newIndex = this.imageindex;
      if (bool)
      {
        newIndex = ((this.imageindex + num) % this.extra.length); 
      }
      else {
        newIndex = ((this.imageindex - num) % this.extra.length); 
      }
      this.imageindexold = this.imageindex;
      this.showold = true;
      this.oldinverval = setInterval(this.stopOld, 600);
      this.imageindex = newIndex;
    },
    stopOld() {
      this.showold = false;
      clearInterval(this.oldinverval);
    }
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    },
    item() {
      return this.$store.state.portfolio[this.$store.state.index];
    },
    index() {
        return this.$store.state.index;
    },
    imagepath() {
      return this.$store.state.portfolio[this.$store.state.index].imagebase + this.extra[this.imageindex] + ".png";
    },
    altImagePath1() {
      let index = (this.imageindex + 1) % this.extra.length;
      return this.$store.state.portfolio[this.$store.state.index].imagebase + this.extra[index] + ".png";
    },
    altImagePath2() {
      let index = (this.imageindex + 2) % this.extra.length;
      return this.$store.state.portfolio[this.$store.state.index].imagebase + this.extra[index] + ".png";
    },
    altImagePath3() {
      let index = (this.imageindex + 3) % this.extra.length;
      return this.$store.state.portfolio[this.$store.state.index].imagebase + this.extra[index] + ".png";
    },
    imageindexoldpath() {
      let index = this.imageindexold;
      return this.$store.state.portfolio[this.$store.state.index].imagebase + this.extra[index] + ".png";
    },
  },
  async created() {
    await this.$store.dispatch('changeIndex', {index: this.$route.params.num});
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(2, 201, 201)"});
    this.imageindex = 0;
    this.extra = [];
    for (var i = 1; i <= this.item.imagenum; i++)
    {
      this.extra.push(i);
    }
    this.show = true;
  }
}
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
}
#main-image {
  position: relative;
  display: block;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}
.old {
  position: absolute;
  display: block;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  animation: slide-left .6s ease;
  transform: translateX(-100%) translateY(1px);
}

@keyframes slide-left {
  from {
    transform: translateX(0%) translateY(1px);
  }
  to {
    transform: translateX(-100%) translateY(1px);
  }
}
.option {
  width: 32%;
  max-height: 106px;
}
.flex-carousel {
  display: flex;
  margin-top: 20px;
  max-height: 106px;
  justify-content: space-around;
}
#main {
  color: rgb(51, 52, 58);
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
  background: white;
  width: 85vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top:140px;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.158);
  margin-bottom: 100px;
  animation: slide-up .5s ease;
}


@keyframes slide-up {
    from {
        transform: translateY(50vh);
        opacity: 0;
    }
}

#carousel {
  position: relative;
  margin-top: 20px;
  display: block;
  width: 80%;
  margin-bottom: 30px;
}

#details {
  display: block;
  width: 80%;
  position: relative;
}

@media screen and (min-width: 949px) {
  #carousel {
    width: 58% !important;
    min-width: 500px;
  }
  #details {
    width: 34% !important;
    min-width: 300px;
  }
}

h1 {
  display: block;
  width: 100%;
  word-wrap:break-word;
    font-family: 'Neucha', cursive;
    text-align: left;
    position: relative;
    font-size: 3em;
    color: rgb(var(--red), var(--green), var(--blue));
    margin: 0;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.158);
    margin-bottom: 30px;
}

h2 {
  display: block;
  word-wrap:break-word;
  width: 100%;
    color: rgb(2, 201, 201);
    text-align: left;
    font-size: 1em;
    margin: 0;
    line-height: 1.5em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.082);
    margin-top: 10px;
}

#buttons {
  margin-top: 50px;
}

p {
  display: block;
  width: 100%;
    color: rgba(0, 0, 0, 0.671);
    text-align: left;
    margin: 10px 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.116);
}

a {
  display: block;
  border: 0;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  margin: 10px;
  background: rgb(2, 201, 201);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.116);
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}

a:hover {
  animation: throb 1s ease infinite;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.863);
}

@keyframes throb {
  50% {
    color: rgb(212, 212, 212);
    text-shadow: 0px 0px 0px white;
  }
}



#navigation {
  display: flex;
  position: absolute;
  justify-content: space-around;
  top: -60px;
  min-width: 190px;
  height: 50px;
  right: 0px;

}

#navigation .navbutton{
  display: block;
  width: 50px; 
  height: 50px;
  background-size: 100% 100%;
  transition: all .3s ease;
  font-size: 2em;
}

#navigation .navbutton:hover {
  transform: scale(1.1, 1.1);
}

#back {
  background-image: url('../assets/logos/close2.png');
}

#goleft {
  background-image: url('../assets/logos/left2.png');
}

#goright {
  background-image: url('../assets/logos/right2.png');
}
</style>