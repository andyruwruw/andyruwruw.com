<template>
  <div id="app">

    <div id="fixed">
      <div id="nav">
        <div id="title-flex" class="flex">
          <h1 class="main-title-white">andrew</h1>
          <h1 class="main-title-black">daniel</h1>
          <h1 class="main-title-white">young.com</h1>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico|Ramabhadra&display=swap');

body {
  background-color: rgb(240, 240, 240);
  margin: 0;
  overflow: scroll;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#routerlinks {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

#routerlinks a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  color: rgb(114, 114, 114);
  font-size: 1em;
  transition: .2s ease;
}

#routerlinks a:hover {
  padding: 5px;
  font-size: 1.2em;
}

#routerlinks a.router-link-exact-active {
  color: black;
}

.flex {
  display: flex;
}

#title-flex {
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0;
}

.main-title-white {
  color: rgb(255, 255, 255);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.3em;
}

.main-title-black {
  color: rgb(59, 59, 59);
  font-family: 'Pacifico', cursive;
  font-size: 2.5em;
}

@media (max-width:800px) {
  .main-title-white {
    font-size: 2em;
  }

  .main-title-black {
    font-size: 2.2em;
  }
}

#fixed {
  position: absolute;
  top: 10px;
  z-index: 100;
  width: 100%;
}



</style>
