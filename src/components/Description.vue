<template>
    <div class="Description">
        <DescriptionWord v-for="(letter, index) in letters" :key="index" :text="letter.text" :override="override || start"/>
    </div>
</template>

<script>
import DescriptionWord from '@/components/DescriptionWord.vue'

export default {
  name: 'Description',
  props: {
    text: String,
    override: Boolean
  },
  components: 
  {
    DescriptionWord
  },
  data()
  {
    return {
        letters: [],
        start: true,
        interval: null,
    }
  },
  methods: {
    startNow()
    {
      this.start = false;
      clearInterval(this.interval);
    }
  },
  created()
  {
    let words = this.text.split(" ");
    for (var i = 0; i < words.length; i++)
    {
        this.letters.push({text: words[i], index: i});
        if (i < words.length - 1)
        {
            this.letters.push({text: " ", index: i});
        }
    }
    this.interval = setInterval(this.startNow, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Description {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
}
</style>
