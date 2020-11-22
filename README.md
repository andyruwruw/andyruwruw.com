<p align="center">
  <a href="https://andyruwruw.com">
    <img
      width="400px"
      src="https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/master/src/assets/logo.svg">
  </a>
</p>

<a href="https://andyruwruw.com">
  <h1 align="center">
    andyruwruw.com
  </h1>
</a>

<p align="center">
  Portfolio site for professional purposes.
</p>


# How it's Made

### Framework

This project was made using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). While most of my projects are in Vue.js, I figured I'd make this site using React.

### Graphics

The images were purchased from [craftwork.design](https://craftwork.design/)! They have some pretty solid sets.

I organized the graphics by layers and converted it from the Adobe Illustrator files they came as into SVGs, from there it was just a matter of animating the separate layers.

The graphics can be found in src/assets/graphics as React components.

### Tilt and Scroll

After going through quite a few libraries, I finally settled on [scroll-snap](https://www.npmjs.com/package/scroll-snap) for scroll control and [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) to move the SVG layers as the user moved the mouse.
