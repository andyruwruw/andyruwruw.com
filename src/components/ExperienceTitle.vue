<template>
    <div class="ExperienceTitle">
      <div class="title-letter-wrapper">
        <ExperienceLetter v-for="letter in letters" v-bind:key="letter.index" :text="letter.text" :trigger="letter.trigger" :override="override || start"/>
      </div>
      
    </div>
</template>

<script>
import ExperienceLetter from '@/components/ExperienceLetter.vue'

export default {
  name: 'ExperienceTitle',
  props: {
    text: String,
    override: Boolean,
    path: String,
  },
  components: 
  {
    ExperienceLetter
  },
  data()
  {
    return {
        letters: [],
        triggered: [],
        nottriggered: [],
        triggerInterval: null,
        removeInterval: null,
        start: true,
    }
  },
  methods:
  {
    randomTrigger()
    {
      if (this.$router.currentRoute.name != "experience")
      {
        clearInterval(this.triggerInterval);
      }
      if (this.nottriggered.length != 0)
      {
          let chosen = Math.floor(Math.random() * this.nottriggered.length);
          if (chosen == this.nottriggered.length - 1)
          {
              return;
          }
          this.letters[this.nottriggered[chosen].index].trigger = true;
          this.nottriggered[chosen].time = new Date();
          this.triggered.push(this.nottriggered[chosen]);
          this.nottriggered.splice(chosen, 1);
      }
    },
    removeTriggers()
    {
      if (this.$router.currentRoute.name != "experience")
      {
        clearInterval(this.removeInterval);
      }
      this.start = false;
      let now = new Date();
      for (var i = 0; i < this.triggered.length; i++)
      {
          if (now.getTime() - this.triggered[i].time.getTime() > 2000 && Math.random() > .9)
          {
              this.letters[this.triggered[i].index].trigger = false;
              this.nottriggered.push(this.triggered[i]);
              this.triggered.splice(i, 1);
              break;
          }
      }
    }
  },
  created()
  {
    for (var i = 0; i < this.text.length; i++)
    {
        this.letters.push({text: this.text.charAt(i), index: i, trigger: false});
        this.nottriggered.push({index: i, time: new Date()});
    }
    this.triggerInterval = setInterval(this.randomTrigger, 2000);
    this.removeInterval = setInterval(this.removeTriggers, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-letter-wrapper {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
}
</style>
