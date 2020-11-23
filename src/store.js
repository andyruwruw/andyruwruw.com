import Vue from 'vue'
import Vuex from 'vuex'

const SOUNDS = {
  click: {tag: "click", volume: .2},
  hover: {tag: "hover", volume: .2},
  load: {tag: "load", volume: .2},
  back: {tag: "back", volume: .2},
  high: {tag: "high", volume: .2},
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backgroundColor: "rgb(255, 195, 0)",
    sound: true,
    portfolio: [
      {title: "My Music Taste", imagenum: 5, imagebase: "./portfolio/spotify", image: "./portfolio/spotify.png", description: "SPOTIFY API! View your data.", link: "http://mymusic.andrewdanielyoung.com", github: "https://github.com/andyruwruw-development/My-Music-Taste",
      largedescription: [
        "Spotify provides an amazing API with so many features it's mind-boggling.",
        "I'm a music junkie with over 450 playlists, so I've been wanting to make something special with their API for some time now.",
        "Here it is! Quite a few different apps built in to completly take advantage of Spotify's API service.",
        "Uses Vue CLI, Node.js Express Rest API, MongoDB"
      ]},
      {title: "andrewdanielyoung.com", imagenum: 4, imagebase: "./portfolio/personal", image: "./portfolio/personal.png", description: "Showin' off my moves! Vue CLI", link: "http://andrewdanielyoung.com", github: "https://github.com/andyruwruw/Home-Page",
        largedescription: [
          "Here's my new website! Using Vue CLI (<3) for the front end.",
          "It was time for an upgrade, and to put everything I've learned into effect!",
          "Goal is to get the contact page instruments clickable to play sounds in my room on my Raspberry Pi to bother me."
        ]},
      {title: "Calendar Countdown", imagenum: 4, imagebase: "portfolio/counter", image: "./portfolio/counter.png", description: "Google Calendar API, P5 Canvas, Vue.js", github: "https://github.com/andyruwruw/Countdown-Timer", link: "https://andyruwruw.github.io/Countdown-Timer/",
        largedescription: [
          "A web application using Vue.js, that links right to your google calendar to help keep you stay on time to your events.",
          "Inspired by a website I had used all through highschool made by a peer of mine. His application however was limited to our bell schedule.",
          "I keep a pretty neat google calendar, and realized it'd be fantastic if I had a timer that updated along with that.",
          
        ]},
      {title: "Productivity", imagenum: 5, imagebase: "./portfolio/todo", image: "./portfolio/todo.png", description: "To Do List Web Application, Vue CLI.", link: "http://todo.andrewdanielyoung.com", github: "https://github.com/andyruwruw/To-Do-Personal",
        largedescription: [
          "A web application using Vue CLI, Node.js Express Server and MongoDB to give you a minimalistic yet powerful To-Do list.",
          "I wanted to have a productive summer but didn't love any of the to-do list options online.",
          "So I made one.",
          "I added a whole bunch of settings, including sound-packs, music and light or dark mode. Went kinda crazy on it."
        ]},
      {title: "Express Chess", imagenum: 3, imagebase: "./portfolio/chess", image: "./portfolio/chess.png", description: "Online Multiplayer Chess, Vue.js", link: "http://chess.andrewdanielyoung.com", github: "https://github.com/andyruwruw/Express-Chess",
        largedescription: [
          "A web application for playing chess online, using Vue.js for the front end, and an Express server with MongoDB to communicate.",
          "This was one of my first big projects using MongoDB. I had a blast coding the logic for chess.",
          "As usual I added music and sound effects for fun.",
          "I hope to remake this using websockets to communicate."
        ]},
      {title: "Flocking Simulation", imagenum: 3, imagebase: "./portfolio/p5", image: "./portfolio/p5.png", description: "P5.js, Canvas, Quadtree", link: "http://p5.andrewdanielyoung.com", github: "https://github.com/andyruwruw-development/P5-Projects",
      largedescription: [
        "Super fun project. Each point has a radius to which it can't see past. It attempts to align, separate and move towards other points.",
        "I wasn't satisfied with the inicial results, so I created a Quad tree, which I could query using the circle of perception to find nearby points.",
        "This made it a lot more efficient. It no longer needed to check every point to every other point.",
        "Threw a rough front end on it. It's not a polished project, just a demonstration.."
      ]},
      {title: "C++ Compiler and Tester", imagenum: 0, imagebase: "./portfolio/c++", image: "./portfolio/c++.png", description: "Compiler and Compairer, C++, Shell Script", github: "https://github.com/andyruwruw/CPlusPlus-Compiler-and-Tester", link: "https://github.com/andyruwruw/CPlusPlus-Compiler-and-Tester",
        largedescription: [
          "A Shell Script and C++ combo that compiles your code, runs your input through and compairs it to solution files you provide.",
          "My firsts tests with Shell Script, aiming to make evaluating my own labs for classes easeier.",
          "The Shell Script identifies paired inputs and solutions based on numbers in the file name."
        ]},
      {title: "Sovereign 2", imagenum: 4, imagebase: "./portfolio/sovereign2", image: "./portfolio/sovereign2.png", description: "First Game and Major Project, Vue.js", link: "http://sovereign2.andrewdanielyoung.com", github: "https://github.com/andyruwruw/Sovereign-2",
        largedescription: [
          "Run your own kingdom and survive through storms, fires, famines and invasions!",
          "My first big project and one of my favorite memories! I still had no idea what I was doing, but had a blast figuring it out. I went over the top to learn everything that I'd need, and wrote thousands of lines of code to get it up and running!",
          "Don't forgot to try out the cheats! The game doesn't size down or up to screens."

        ]},
    ],
    skills: [
      {
        title: "Web Development", 
        flag: "</>",
        size: 25, 
        distance: 1.3, 
        speed: 3, 
        proficiency: 10, 
        links: [], 
        description: [
          "Web development is a blast and a personal hobby of mine, and most of my portfolio is websites you can visit now!",
          "I have only had a year of web design experience, but I've pushed myself to learn as much as I can.",
          "Currently, I TA for my college's CS 260 Web Development Intro Course, working lab hours and grading work.",
          "I have every intention of developing further with new challenges!",
        ]
      },
      {
        
        title: "Videography", 
        flag: ">.<",
        size: 20, 
        
        distance: 2.1, 
        speed: 3.5, 
        proficiency: 9, 
        links: [], 
        description: 
        [
          "I've been making videos for 8 years now with a focus on editing and visual effects.", 
          "I am very experienced in both Adobe Premiere and After Effects.", 
          "Through videography, I got involved in my school newspaper, and journalistic media.", 
          "I learned Photoshop as a tool to add value to images without bias edits."
        ]
      },
      {
        title: "Vue CLI", 
        flag: "UwU",
        size: 30, 
        distance: 2.2, 
        speed: 4, 
        proficiency: 8, 
        links: [], 
        description: [
          "I'm in love!  Vue.js is my favorite framework, and I usually opt to use Vue CLI most projects.",
          "I pushed myself early on to learn and use Vue CLI until I was comfortable with the tools it offered.",
          "There's still so much to learn, but it's what I find most comfortable!",
        ]
      },
      {
        title: "NodeJS", 
        flag: "UwU",
        size: 20, 
        distance: 2.8, 
        speed: 3, 
        proficiency: 8, 
        links: [], 
        description: [
          "I've worked a lot with NodeJS to create servers for my web applications",
          "Most of my applications have linked to MongoDB, I've also experimented with WebSockets.",
        ]
      },
      {
        title: "C++ Language", 
        flag: "</>",
        size: 23, 
        distance: 3.4, 
        speed: 5, 
        proficiency: 7, 
        links: [], 
        description: 
        [
          "C++ is the language taught throughout my current college CS courses, and thus the one I know most in depth.",
          "My level of comfort simply simply has to do with low level of use outside of class labs.",
          "I'm always looking for projects I can implement in C++ and would love to work on something cool!",
        ]
      },
      {
        title: "Python", 
        size: 22, 
        flag: "</>",
        distance: 4.1, 
        speed: 3, 
        proficiency: 7, 
        links: [], 
        description: 
        [
          "My dad taught me Python when I was 10 years old. Back then, just enough to make silly games.",
          "After choosing to become a CS major, I retaught myself and have worked on quite a few small projects.",
          "I find Python comfortable, but have a lot more I want to learn to do with it!",
        ]
      },
      {
        title: "C Language", 
        size: 28,
        flag: "</>",
         distance: 4.9, 
         speed: 5, 
         proficiency: 4, 
         links: [], 
         description: 
         [
           "I'm currently enrolled in a class that requires C for all the labs.",
           "I'm learning, but getting more and more familiar with it's syntax.",
          ]
        },
      {
        title: "Java", 
        size: 22, 
        flag: "</>",
        distance: 5.5, 
        speed: 4, 
        proficiency: 3, 
        links: [], 
        description: 
        [
          "I've done a bit of coding with Java and learned the basics.",
          "Certainly not something I would call my self proficient in, but I'm interested in learning more!",
          "I helped my friend through a college intro to coding course in Java and picked up a lot of the syntax.",
        ]
      }
    ],
    index: 0,
  },
  mutations: {
    setBackgroundColor(state, backgroundColor) {
      state.backgroundColor = backgroundColor;
    },
    setSound(state, sound) {
      state.sound = sound;
    },
    setIndex(state, index) {
      state.index = index;
    }
  },
  actions: {
    changeBackgroundColor(context, payload) {
      context.commit("setBackgroundColor", payload.color);
      document.getElementById("body").style.backgroundColor = this.state.backgroundColor;
    },
    playSound(context, payload) {
      if (!this.state.sound)
        return;
      try {
        var media = document.getElementById(SOUNDS[payload.sound].tag);
        media.volume = SOUNDS[payload.sound].volume;
        const playPromise = media.play();
        if (playPromise !== null) 
            playPromise.catch(() => {media.play();})
      } catch (error) {
        console.log("Had issues playing a sound!");
      }
    },
    mute(context)
    {
      context.commit('setSound', false);
    },
    soundOn(context)
    {
      context.commit('setSound', true);
    },
    changeIndex(context, payload) {
      context.commit('setIndex', payload.index);
    },
  }
})
