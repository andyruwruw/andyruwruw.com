<template>
<div id="about">
    <div id="background">
        <div id="about-div">
            <div id="about-image"></div>
            <div id="about-titles" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease">
                <h1>Hi!</h1>
                <h1>I'm Andrew.</h1>
            </div>
            <p data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease" id="about-description" >I attend Brigham Young University Provo, majoring in computer science. I love music, beaches, and making funny videos! I uncovered a passion for web design my sophmore year and pretty much do that all day long.</p>
            <div id="shadow"></div>
        </div>
    </div>
</div>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'about',
  data() {
    return {
     
    }
  },
  methods: {
    
  },
  computed: {

  },
  created() {
      AOS.init();
  }
}


</script>

<style scoped>
#background {
  background-color: rgb(240, 240, 240);
  padding-bottom: 75px;
}

#about-div {
    display: block;
    width: 100%;
    background-color: rgb(240, 240, 240);
    padding-bottom: 100px;
    
    position: relative;
}

#shadow {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 10px 10px 10px rgba(128, 128, 128, 0.432);
}

#about-image {
    display: block;
    width: 100%;
    height: 500px;
    background-image: url("../assets/personal/andrew.png");
    background-size: cover;
    background-position: 0px 30%;
    background-repeat: no-repeat;
}

#about-titles {
    color: rgb(59, 59, 59);
    padding-top: 50px;
    font-size: 1em;
}

#about-description {
    padding-top: 30px;
    color: rgb(165, 165, 165);
    width: 50%;
    max-width: 550px;
    text-align: center;
    margin: 0 auto;
    font-size: 1.2em;
}
</style>