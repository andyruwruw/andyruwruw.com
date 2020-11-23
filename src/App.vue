<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Neucha&display=swap');


body {
  background-color: rgb(255, 195, 0);
  transition: all .3s ease;
  min-height: 100vh;
  margin: 0px;
  width: 100vw;
  overflow-x: hidden;
}

@font-face { 
  font-family: 'Lovelo-Black';
  src:  url('./assets/fonts/Lovelo-Black.woff2') format('woff2'),
        url('./assets/fonts/Lovelo-Black.woff') format('woff'),
        url('./assets/fonts/Lovelo-Black.ttf') format('typetrue');
} /* font-family: 'Lovelo-Black', Fallback, sans-serif; */

@font-face {
  font-family: 'Lovelo-LineBold';
  src:  url('./assets/fonts/Lovelo-LineBold.woff2') format('woff2'),
        url('./assets/fonts/Lovelo-LineBold.woff') format('woff'),
        url('./assets/fonts/Lovelo-LineBold.ttf') format('typetrue');
} /* font-family: 'Lovelo-LineBold', Fallback, sans-serif; */

@font-face {
  font-family: 'Lovelo-LineLight';
  src:  url('./assets/fonts/Lovelo-LineLight.woff2') format('woff2'),
        url('./assets/fonts/Lovelo-LineLight.woff') format('woff'),
        url('./assets/fonts/Lovelo-LineLight.ttf') format('typetrue');
} /* font-family: 'Lovelo-LineLight', Fallback, sans-serif; */

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
/* font-family: 'Roboto', sans-serif; */

#app {
  display: block;
  position: absolute;
  margin: 0 0;
  left: 0;
  top: 0;
  width: 99vw;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2935;
  color: #ffffff;
}

.flex
{
  display: flex;
}


</style>
