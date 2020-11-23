<template>
    <div class="ContactTitle">
      <div  class="title-letter-wrapper">
        <ContactLetter  v-for="letter in letters" v-bind:key="letter.index" :text="letter.text" :trigger="letter.trigger" :override="overrideComp"/>
      </div>
      
    </div>
</template>

<script>
import ContactLetter from '@/components/ContactLetter.vue'

export default {
  name: 'ContactTitle',
  props: {
    text: String,
    path: String,
    override: Boolean,
    default: Boolean
  },
  components: 
  {
    ContactLetter
  },
  data()
  {
    return {
        letters: [],
        triggered: [],
        nottriggered: [],
        triggerInterval: null,
        removeInterval: null,
        inicial: false,
    }
  },
  methods:
  {
    randomTrigger()
    {
      if (this.$router.currentRoute.name != "contact")
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
      if (this.$router.currentRoute.name != "contact")
      {
        clearInterval(this.removeInterval);
      }
      this.inicial = true;
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
  computed:
  {
    overrideComp()
    {
      if (this.default)
      {
        return this.override;
      }
      else
      {
        return !this.inicial;
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
    justify-content: center;
    flex-wrap: wrap;
    align-items: bottom;
}
</style>
