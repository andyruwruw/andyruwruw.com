<template>
  <div class="PortfolioLetter">
    <div @mouseover="transition" @mouseout="off" class="special-wrap">
      <h1 :class="{space : text == ' ', pad : text == '\'' || text == 'W'}" class="sizing">{{text}}</h1>
      <h1 :class="{show : (!stencil && !trigger && !override), left : ((stencil || trigger) || override) && direction.x == 1, right : ((stencil || trigger) || override) && direction.x == -1, top : ((stencil || trigger) || override) && direction.y == -1, bottom : ((stencil || trigger) || override) && direction.y == 1}" class="bold">{{text}}</h1>
      <h1 :class="{show : (stencil || trigger&& !override), left : ((!stencil && !trigger) || override) && direction.x == -1, right : ((!stencil && !trigger) || override) && direction.x == 1, top : ((!stencil && !trigger) || override) && direction.y == 1, bottom : ((!stencil && !trigger) || override) && direction.y == -1}" class="line">{{text}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioLetter',
  props: {
    text: String,
    trigger: Boolean,
    override: Boolean
  },
  data() {
    return {
      stencil: false,
      direction: {x: 0, y: 0},
      time: 0,
      interval: null,
    }
  },
  methods:
  {
    transition()
    {
      this.stencil = true;
    },
    off()
    {
      this.time = 20;
    },
    delay()
    {
      if (this.$router.currentRoute.name != "portfolio")
      {
        clearInterval(this.interval);
      }
      if (this.time > 0)
      {
        this.time -= 1;
        if (this.time == 0)
        {
          this.stencil = false;
        }
      }
    }
  },
  created() 
  {
    let options = [{x: 1, y: 0}, {x: -1, y: 0}, {x: 0, y: 1}, {x: 0, y: -1},];
    this.direction = options[Math.floor(Math.random() * options.length)];
    this.interval = setInterval(this.delay, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TitleLetter
{
  display: inline-block;
}
.special-wrap
{
  position: relative;
  display: inline-block;
  overflow: hidden;
}

@media screen and (min-width: 1130px) {
  h1 {
    font-size: 6em !important;
  }
  .bold {
    font-size: 6em !important;
  } 
  .line {
    font-size: 5.7em !important;
  }
  .sizing {
    font-size: 6em !important;
  }
}

h1 {
  cursor: default;
  display: inline-block;
  margin: 0;
  transition: all .5s ease;
  font-size: 3em;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.233);
}

.space 
{
  padding: 0 15px;
}

.pad {
  padding: 0 5px;
}

.sizing
{
  color: rgba(0, 0, 0, 0);
  font-family: 'Lovelo-LineLight', Fallback, sans-serif;
  text-shadow: 2px 2px 5px #00000000; 
  font-size: 3em;
}

.bold
{
  font-size: 3em;
  position: absolute;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
}

.line 
{
  font-size: 2.8em;
  padding-top: 4px;
  position: absolute;
  font-family: 'Lovelo-LineLight', Fallback, sans-serif;
}

.show
{
  left: 0px;
  top: 0px;
}

.left
{
  top: 0px;
  left: -101%;
}

.right
{
  top: 0px;
  left: 101%;
}

.top
{
  left: 0px;
  top: -101%;
}

.bottom
{
  left: 0px;
  top: 101%;
}
</style>