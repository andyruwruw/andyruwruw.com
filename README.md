<h1 align="center">andyruwruw.com Legacy V2</h1>

<p align="center">
  Live: <a href="https://v2.andyruwruw.com">v2.andyruwruw.com</a>
</p>

<p align="center">
  Created: October 2019
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/landing.PNG" />
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/portfolio.PNG" />
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/skills.PNG" />
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/skill.PNG" />
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/experience.PNG" />
</p>

<p align="center">
  <img width="400px" src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/legacy-v2/documentation/contact.PNG" />
</p>

This is my home website! Lists all my skills, work experience, and past projects.

The website was made using Vue CLI with Vuex. No packages were needed and a majority of the interactions are animations and transitions. 

It was a lot of fun to make, and a major update from my previous website, which still lives in this directory.

# Read Me Contents
- [Cool Details](#Cool-Details)
    - [Part 1:](#Sliding-Titles) Sliding Titles
    - [Part 2:](#Home-Page) Home Page
    - [Part 3:](#Solar-System) Solar System
    - [Part 4:](#Other-Pages) Other Pages
    - [Part 5:](#Contact) Contact

- [Final Comments](#Final-Notes)

# Cool Details

## Sliding Titles

The sliding titles featured on the main page were built in from two components. Each title is a component that contains letter components.

Titles take in two parameters:
```
    text: String,
    override: Boolean,
```
For every letter in `text` a letter component is made and passed the character it's to display. 

`override` is used at the load of each page. It ensures no text is displayed at screen load, for a pretty cool animation. If override is true, no text will be within fram.

Title manages triggering random letter to animate by running a function `randomTrigger`, which selects a letter (that isn't already triggered).

Each letter, once triggered, has a certain amount of time before it has the **chance** to be untriggered. The chance is to have times when multiple letters are triggered.

Since mobile doesn't have hover, adding these random triggerings allows the animations to stick around!

Letters take in three parameters: 
```
    text: String,
    trigger: Boolean,
    override: Boolean
```

`text` once again is just the character passed down.

The component has three `<h1>` elements, one for sizing, one for the default bold, and one for the weird line font.

The direction the letter is hidden is randomly chosen, and the line font character is hidden.

When `trigger` is true, the bold character moves off to the side, and the line text animates in. 

`override` sets both the bold text and line text to be off screen.

It was a lot of fun making this work and a cool challenge!!

## Home Page

The homepage is dynamic and super easy to change!

It runs off an array of objects, and depending on the information available, creates the right components to fit.  

```
screens: [
        {title: "Hi, I'm Andrew", description: "Welcome to my website!", active: false, path: ""},
        {title: "BYU CS Undergrad", description: "Currently finshing up my junior year.", active: false, path: "resume"},
        {title: "I Love Coding", description: "Check out some of my solo projects!", active: false, path: "portfolio"},
        {title: "Diverse Skills", description: "Front and Back-End, Videography, Music amd Journalism", active: false, path: "skills"},
        {title: "Let's Get in Touch", description: "For Work / Music / Memes", active: false, path: "contact"}
      ],
```

Having a `path` will create a *Learn More* button that will then take that path and route to it when clicked.

I would have prefered to use indexing as opposed to `active`, but when switching between the screens, I wanted to first override the old screen, to have it animate out, and animate in the new screen. 

Vue's `v-if` functionality completly removes a component, so I had to keep the old screen `active` while I triggered it's `override` at least until it was animated out. Only two screen's HTML exist on the screen at any given point, and their interval functions are removed.

## Solar System

Funnest challenge yet. 

The planets were made using animations. Honestly way simpler than it looks.

They all have a `rotate(1turn)` animation simultanious to an animation that translates their Y position down when they're at the top of their circle, and up at the bottom. 

This makes it look like an ellipse. 

The shadows are also an animation. SUPER SIMPLE AS WELL. 

The background is a radial gradient, and the animation just moves the `background-position` and lines up with the circle function.

All the planets are dynamically based on an array. Each object in the array has the planets *size, distance, title, speed, description, proficiency*, the pages for the planets are dynamically created for each planet as well, based on the same array. 

Planet pages have random spots and bar lengths.

Planets and items are super easy to change and edit!

*The array can be found in the store.js within src*

[store.js](home-page/src/store.js)

## Other Pages

Experience and Portfolio are once again both based on arrays, and change how they display the items based on what's available. 

## Contact

I really want to make the contact page have sounds and more instruments that bother the phone, and then set up my raspberry pi in my room to play those sounds everytime someone on my website triggers them. Figured it'd be a fun project.

A few things to consider with that, given that my friends are also CS majors and sworn to create automated clickers if I do implement that, so we'll see if I get to that sometime soon.

# Final Notes

Lots of fun making this website! I have a lot more work I want to do with it, get it looking cleaner and smoother. 

Hope you enjoyed!

