<template>
  <div :class="$style.intro">
    <div :class="$style.title">
      <span>
        Code.
      </span>

      <span>
        College.
      </span>

      <span>
        Music.
      </span>

      <span>
        Videography.
      </span>
    </div>

    <icon-div
      :class="$style.about"
      icon="mdi-chat">
      <template #header>
        <div class="d-flex align-center justify-space-between">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                href="https://www.linkedin.com/in/andrew-young-3322b3133/"
                color="black"
                :icon="true"
                :class="$style['social-link']">
                <v-icon size="30">
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </template>

            <span>
              LinkedIn
            </span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                href="https://github.com/andyruwruw"
                color="black"
                :icon="true"
                :class="$style['social-link']">
                <v-icon size="30">
                  mdi-github
                </v-icon>
              </v-btn>
            </template>

            <span>
              Github
            </span>
          </v-tooltip>
        </div>
      </template>

      <template #content>
        <div>
          <p>
            Hello! I'm <span :class="$style.bold">Andrew Young</span>, a student <span :class="$style.bold">finishing up a bachelors degree</span> in computer science.
            I currently work at Chess.com as a <span :class="$style.bold">front-end intern</span>. 
          </p>

          <p>
            I have a deep passion for <span :class="$style.bold">web development</span> and consider myself a <span :class="$style.bold">vue.js fanboy</span>!
          </p>
        </div>
      </template>
    </icon-div>
  </div>
</template>

<script>
import IconDiv from '@/components/ui/IconDiv.vue';

export default {
  name: 'Intro',
  components: {
    IconDiv,
  },
};
</script>

<style module>
@import url('../global/colors.css');

.intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.intro .title {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10% auto 0;
}

.intro .title span {
  display: inline-block;
  font-size: 140px;
  line-height: 120px;
}

.about {
  margin-top: 50px;
}

.social-link {
  margin: 0 8px;
}

p {
  line-height: 1.8;
  font-size: 24px;
}

p a.link {
  color: var(--accent);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  text-decoration: none;
}

.bold {
  font-weight: 700;
}

.tooltip {
  color: black;
}
</style>