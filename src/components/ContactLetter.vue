<template>
  <div class="ContactLetter">
    <div @mouseover="transition" @mouseout="off" class="special-wrap">
      <h1 :class="{space : text == ' ', pad : text == '\'' || text == 'W'}" class="sizing">{{text}}</h1>
      <h1 :class="{show : (!stencil && !trigger && !override), left : ((stencil || trigger) || override) && direction.x == 1, right : ((stencil || trigger) || override) && direction.x == -1, top : ((stencil || trigger) || override) && direction.y == -1, bottom : ((stencil || trigger) || override) && direction.y == 1}" class="bold">{{text}}</h1>
      <h1 :class="{show : (stencil || trigger&& !override), left : ((!stencil && !trigger) || override) && direction.x == -1, right : ((!stencil && !trigger) || override) && direction.x == 1, top : ((!stencil && !trigger) || override) && direction.y == 1, bottom : ((!stencil && !trigger) || override) && direction.y == -1}" class="line">{{text}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactLetter',
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
      if (this.$router.currentRoute.name != "contact")
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
.SolarLetter
{
  display: inline-block;
}
.special-wrap
{
  position: relative;
  display: inline-block;
  overflow: hidden;
}

h1 {
  display: inline-block;
  margin: 0;
  cursor: default;
  font-size: 7em;
  line-height: 140px;
  transition: all .5s ease;
  color: rgb(0, 0, 0);
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
}

.bold
{
  font-size: 7em;
  position: absolute;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
}

.line 
{
  font-size: 6.6em;
  padding-top: 0px;
  position: absolute;
  font-family: 'Lovelo-LineLight', Fallback, sans-serif;
}

.show
{
  left: 0px;
  top: 5px;
}

.left
{
  top: 0px;
  left: -120%;
}

.right
{
  top: 0px;
  left: 120%;
}

.top
{
  left: 0px;
  top: -120%;
}

.bottom
{
  left: 0px;
  top: 120%;
}
</style>