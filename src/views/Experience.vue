<template>
  <div class="experience">
    <Menu  :dark="true" :opacity="1" curr="experience"/>
    <div id="main-div">
      <div id="left">
        <ExperienceTitle text="EXPERIENCE" :override="false"/>
        <div :class="{load: load}" class="section-button" @click="selectPage(1)" id="education">EDUCATION<div v-if="page == 1" class="selected"/></div>
        <div :class="{load: load}" class="section-button" @click="selectPage(2)" id="work">WORK<div v-if="page == 2" class="selected"/></div>
      </div>
      <div id="right">
        <div class="page" id="education-items" v-if="page == 1">
          <div class="education-item" :style="{'--delay': + index}" v-for="(item, index) in school" :key="'education' + index">
            <h1>{{item.title}}</h1>
            <h2>{{item.location}}</h2>
            <h3>{{item.date}}</h3>
            <div class="details" v-if="item.toggle && item.description != ''">
              <p :style="{'--pdelay': + 0}">{{item.description}}</p>
            </div>
            <div class="samplecourses" v-if="item.toggle && item.samplecourses.length != 0">
              <p :style="{'--pdelay': + index}" v-for="(course,index) in item.samplecourses" :key="course">{{course}}</p>
            </div>
            <button @click="item.toggle = !item.toggle;" v-if="item.description != '' && !item.toggle">Expand Details</button>
            <button @click="item.toggle = !item.toggle;" v-if="item.description != '' && item.toggle">Close Details</button>
            <button @click="item.toggle = !item.toggle;" class="expand-courses" v-if="item.samplecourses.length != 0 && !item.toggle">Sample Coursework</button>
            <button @click="item.toggle = !item.toggle;" class="expand-courses" v-if="item.samplecourses.length != 0 && item.toggle">Close Coursework</button>

          </div>
        </div>
        <div class="page" id="work-items" v-if="page == 2">
          <div class="work-item" :style="{'--delay': + index}" v-for="(item, index) in work" :key="'work' + index">
            <h1>{{item.title}}</h1>
            <h2>{{item.organization}}</h2>
            <div class="dates">
              <h3 v-for="date in item.dates" :key="'date' + date" class="date">{{date}}</h3>
            </div>
            <p class="details" v-if="item.toggle">{{item.description}}</p>
            <button @click="item.toggle = !item.toggle;" v-if="item.description != '' && !item.toggle">Expand Details</button>
            <button @click="item.toggle = !item.toggle;" v-if="item.description != '' && item.toggle">Close Details</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import ExperienceTitle from '@/components/ExperienceTitle.vue'

export default {
  name: 'experience',
  components: {
    Menu,
    ExperienceTitle
  },
  data() {
    return {
      page: 0,
      work: [
        {toggle: false, title: "TA Web Development (CS 260)", organization: "Brigham Young University, Provo, UT", dates: ["AUGUST 2019 - CURRENT"], description: "Lab hours and grading student work."},
        {toggle: false, title: "Coding Camp Counselor", organization: "STEM4Kids, Cupertino, CA", dates: ["MAY 2019 - AUGUST 2019"], description: "Teaching Python and C++ to students along with counselor responsibilities."},
        {toggle: false, title: "Music Studio Lead (Counselor)", organization: "Steve and Kate’s Summer Camp, CA", dates: ["MAY 2017 - AUGUST 2017", "MAY 2018 - AUGUST 2018"], description: "In charge of the music studio, helping kids develop a passion for instruments and music!"},
        {toggle: false, title: "Temporary Human Resources Assistant", organization: "RTW Management", dates: ["MAY 2018 - MAY 2018"], description: "Responsible for locating paratransit drivers in New York for the U.S. Open."},
        {toggle: false, title: "Executive Producer of Media", organization: "California’s “Youth in Government”", dates: ["JANUARY 2017 - JUNE 2017"], description: "Lead a team of over 200 aspiring videographers across to state to provide media coverage of Youth and Government's yearly mock state government in Sacramento. Gatekeeper of quality control."},
        {toggle: false, title: "Media Editor for High school newspaper", organization: "Los Altos High School's The Talon", dates: ["APRIL 2016 - JUNE 2017"], description: "In charge of a staff of videographers, photographers and graphic artists to ensure their workflow aligns with the writers. Also head and final editor of all media before publication."}
      ],
      school: [
        {toggle: false, title: "BS, Computer Science", location: "Brigham Young University, Provo, UT", date: "AUGUST 2017 - APRIL 2021", samplecourses: ["Discrete Structures", "Computer Systems", "Data Structures", "Web Development"], description: ""},
        {toggle: false, title: "High School Graduation Date: June 2017", location: "Los Altos High School, CA", date: "", samplecourses: [], description: "GPA 3.87 unweighted (Grades 9-12) on a 4.0 scale"},
      ],
      load: true,
      interval: null,
    }
  },
  methods: {
    selectPage(val) {
      this.page = val;
    },
    loaded() {
      this.load = false;
      clearInterval(this.interval);
    }
  },
  created() {
    this.$store.dispatch("changeBackgroundColor", {color: "rgb(255, 252, 252)"});
    this.autoChangeInterval = setInterval(this.autoChange, 500);
    this.interval = setInterval(this.loaded, 500);
  }
}
</script>

<style scoped>
.date {
  margin-right: 20px;
}
.dates {
  display: flex;
  flex-wrap: wrap;
}
.samplecourses {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 10px;
}

p {
  --pdelay: 0;
  display: inline-block;
  margin: 10px 20px;
  margin-left: 0;
  margin-bottom: 5px;
  font-weight: bolder;
  color: rgb(165, 159, 159);
  animation: fade-in .4s ease calc(var(--pdelay) * .1s), imhiding calc(var(--pdelay) * .1s) linear;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

.education-item {
  --delay: 0;
  display: block;
  margin: 0 auto;
  border: 1px solid black;
  width: 60%;
  margin-bottom: 50px;
  padding: 30px;
  animation: slide-right .5s ease calc(var(--delay) * .2s), imhiding calc(var(--delay) * .2s) linear;
}

.work-item {
  --delay: 0;
  display: block;
  margin: 0 auto;
  border: 1px solid black;
  width: 60%;
  margin-bottom: 50px;
  padding: 30px;
  animation: slide-right .5s ease calc(var(--delay) * .2s), imhiding calc(var(--delay) * .2s) linear;
}

#main-div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95vw;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: left;
  color: rgb(27, 29, 32);
  padding: 30px;
  border-radius: 10px;
}


@media screen and (min-width: 1015px) {
  #main-div {
    flex-wrap: nowrap !important;
  }
  #left {
    width: 40% !important;
    margin-bottom: 0px;
  }
  #right {
    width: 65% !important;
  }
}

@media screen and (min-width: 1520px) {
  .section-button {
    font-size: 3.5em !important;
  }
}

#left {
  display: block;
  width: 70%;
  margin-bottom: 40px;
  min-width: 290;
}

#right {
  display: block;
  width: 95%;
  min-width: 480px;
}

.section-button {
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  font-size: 2.5em;
  margin-top: 40px;
  text-align: right;
  cursor: pointer;
  position: relative;
}

.selected {
  position: absolute;
  display: block;
  bottom: 0;
  top: 50%;
  width: calc(50% + 20px);
  right: 0;
  height: 25%;
  z-index: -100;
  background-color: rgba(255, 255, 0, 0.425);
  animation: expand .3s ease;
}

@keyframes expand {
  from {
    width: 0px;
  }
}

.section-button.load {
  animation: slide-left .5s ease;
}

@keyframes slide-left {
  from {
    transform: translateX(-400px);
    opacity: 0;
  }
}

@keyframes imhiding {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}


@keyframes slide-right {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
}



.section-button:hover {
  animation: throb 1s linear infinite;
}

@keyframes throb {
  50% {
    color: rgb(130, 135, 141);
  }
}

h1 {
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  font-size: 1.5em;
  margin: 2px 0px;
}

h2 {
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  font-size: 1em;
  color: rgb(130, 135, 141);
  font-weight: lighter;
  margin: 4px 0px;
}

h3 {
  font-size: 1em;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  margin: 0;
  color: rgba(143, 150, 161, 0.856);
}

button {
  color: rgb(236, 235, 235);
  display: block;
  background: rgb(75, 74, 74);
  border-radius: 3px;
  padding: 5px;
  border: 0px;
  margin-top: 10px;
  font-family: 'Lovelo-Black', Fallback, sans-serif;
  transition: all .3s ease;
}

button:hover {
  background: black;
}

</style>