<template>
<div id="introduction">
    <div id="intro-div" >
        <div id="intro-titles">
            <h1 id="intro-title" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease">CS College {{collegeyear}}</h1>
            <h1 id="intro-description" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease">pumped to make some awesome websites.</h1>
        </div>
    </div>
</div>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'introduction',
  data() {
    return {
     
    }
  },
  methods: {
    
  },
  computed: {
    collegeyear() {
        let titles = ["Junior", "Senior"];
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();

        if (year >= 2020 && month >= 5)
        {
            return titles[1];
        }
        else {
            return titles[0];
        }
        
    }
  }
}
</script>

<style scoped>
#intro-div {
    width: calc(100vw);
    height: calc(100vh);
    z-index: -101;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.226)), url("../assets/personal/beach.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
}

@media (max-width:600px) {
  #intro-title {
    font-size: 3em !important;
  }
  #intro-description {
    font-size: 1em !important;
  }
}

#intro-titles {
    position: fixed;
    z-index: -100;
    width: 100%;
    left: 0%;
    top: 38%;
}

#intro-title {
    color: white;
    font-size: 4em;
}

#intro-description {
    font-size: 1.5em;
    text-transform: uppercase;
    color: rgb(59, 59, 59);
}


</style>