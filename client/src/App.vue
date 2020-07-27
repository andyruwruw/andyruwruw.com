<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      flat>
      <div class="d-flex align-center">
        <div id="logo">
          <span>
            AY
          </span>
        </div>

        <p id="title">
          Andrew Young
        </p>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        Work
      </v-btn>

      <v-btn text>
        Portfolio
      </v-btn>

      <v-btn text>
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('./components/global/colors.css');

#logo {
  --size: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
  background: var(--accent);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

#logo span {
  color: white;
}

#title {
  margin: 0;
  padding: 0 20px;
  font-family: 'Roboto', sans-serif;
  transition: all .25s ease-out;
  font-size: 18px;
  font-weight: 700;
}
</style>
