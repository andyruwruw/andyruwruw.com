<template>
  <div class="portfolio">
    <Menu :opacity="1" curr="portfolio"/>
    <PortfolioTitle id="portfolio-title" text="MY PORTFOLIO" :override="false"/>
    <div id="list">
      <div class="item" @click="clickItem(index)" v-for="(item, index) in portfolio" v-bind:key="item.title" :style="{'--delay': + (index + 1)}">
        <div class="image" :style="{backgroundImage: 'url(\'' + images[index] + '\')'}" />
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import PortfolioTitle from '@/components/PortfolioTitle.vue'

export default {
  name: 'portfolio',
  components: {
    Menu,
    PortfolioTitle
  },
  methods: {
    async clickItem(index) {
      await this.$store.dispatch('changeIndex', {index: parseInt(index, 10)});
      this.$router.push('portfolio/' + index + "/" + this.portfolio[index].title);
    }
  },
  data() {
    return {
      images: []
    }
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    }
  },
  async created() {
    
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(2, 201, 201)"});
    for (var i = 0; i < this.portfolio.length; i++)
    {
      this.images.push(this.portfolio[i].image);
    }
    await this.$store.dispatch('changeIndex', {index: 0});
  }
}
</script>

<style scoped>
#portfolio-title {
  margin-top: 20px;
}
.portfolio {
  width: 70vw;
  display: block;
  margin: 0 auto;
  margin-top: 75px;
  overflow: hidden;
}

.item {
  --delay: 0;
  display: block;
  width: 250px;
  margin: 10px;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 20px;
  height: 180px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.192);
  transition: all .3s ease;
  border: 1px solid rgb(223, 223, 223);
  overflow: hidden;
  animation: dontshow calc(var(--delay) * .1s) linear, slide-up .6s ease calc(var(--delay) * .1s);
  cursor: pointer;
}

.image {
  display: block;
  width: 98%;
  height: 120px;
  border-radius: 2%;
  background-size: 175% auto;
  background-position: 50% 25%;
  opacity: .5;
  transition: all .5s ease;
}

.item:hover .image {
  opacity: 1;
  background-size: 100% auto;
}

@keyframes slide-right {
  from {
    transform: translate(-50vw, 0px);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

#list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;

  align-items: center;
  margin-bottom: 40px;
}



@keyframes slide-up {
  from {
    transform: translate(0px, 500px);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

@keyframes dontshow {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.item:hover {
  transform: translate(-5px, -10px) scale(1.05, 1.05);
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.158);
}

h2 {
  color: rgb(45, 52, 65);
  font-family: 'Neucha', cursive;
  text-align: left;
  margin: 0px 0px;
  margin-top: 10px;
}

p {
  font-family: 'Neucha', cursive;
  color: rgb(45, 52, 65);
  margin-bottom: 20px;
  margin-top: 8px;
  text-align: left;
}
</style>