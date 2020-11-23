<template>
  <div class="home">
    <introduction id="introduction"/>
    <portfolio id="portfolio"/>
    <about id="about" />
    <div id="resume-block">
      <resume id="resume">
      </resume>
    </div>
    <div class="flex" id="technical-flex">
      <h3 id="technical-title">LANGUAGES</h3>
      <div class="flex" id="technicals">
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >C++</h3>
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >JavaScript</h3>
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >HTML</h3>
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >CSS</h3>
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >Java</h3>
        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out-back" >Python</h3>
      </div>
    </div>
    <contact id="contact" />
    <div id="background"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'
import Portfolio from '@/components/Portfolio.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Resume from '@/components/Resume.vue'

export default {
  name: 'home',
  components: {
    Introduction,
    Portfolio,
    About,
    Contact,
    Resume
  }
}
</script>

<style scoped>
#technicals {
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
  flex-wrap: wrap;
  min-width: 450px;
  background-color: rgb(240, 240, 240);
}

h3 {
  margin: 0px 20px;
  font-size: 2em;
  color: rgb(255, 255, 255);
  margin-top: 30px;
  background-color: rgb(83, 177, 235);
  border-radius: 70px;
  padding: 10px;
  width: 150px;
  box-shadow: 10px 10px 10px grey;
  font-size: 1.5em;
}


@media (max-width:1000px) {
 #resume {
   transform: scale(.7, .7) translate(0px,-300px);
   top: -100px;
 }
 #resume-block {
   height: 990px !important;
 }
}

#technical-title {
  color: rgba(75, 78, 80, 0.589);
  background-color: rgba(0,0,0,0);
  box-shadow: 10px 10px 10px rgba(128, 128, 128, 0);
  background-color: rgb(240, 240, 240);
  margin: 0 auto;
  font-size: 2em;
  width: auto;
}

#technical-flex {
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 70%;
  max-width: 1100px;
  padding: 0% 15%;
  padding-bottom: 100px;
  margin: 0 auto;
}

#introduction {
  display: block;
  width: 100%;
}

#portfolio {
  display: block;
  width: 100%;
  background-color: rgb(240, 240, 240);
}
#about {
  display: block;
  width: 100%;
  position: relative;
}
#resume {
  display: block;
  position: absolute;
  width: 100%;
  background-image: rgb(240, 240, 240);
  top: 60px;
}

#resume-block {
  width: 100%;
  height: 1400px;
  display: block;
  background-color: rgb(240, 240, 240);
  position: relative;
}

#contact {
  display: block;
  width: 100%;
  background-color: rgb(240, 240, 240);
}
</style>
