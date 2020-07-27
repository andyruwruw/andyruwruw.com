<template>
  <div :class="$style['icon-div']">
    <v-icon
      :size="350"
      :class="$style.icon"
      color="#F4F4F4">
      {{ icon }}
    </v-icon>

    <div :class="$style.container">
      <div
        class="d-flex align-center">
        <separator
          color="#00CC99"
          :width="135"
          :class="$style.separator" />

        <slot name="header"></slot>
      </div>

      <div :class="$style.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from '@/components/ui/Separator.vue';

export default {
  name: 'IconDiv',
  components: {
    Separator,
  },
  props: {
    icon: {
      type: String,
      default: 'mdi-format-quote-open',
    },
  },
}
</script>

<style module>
.icon-div {
  position: relative;
}

.icon-div .icon {
  position: absolute;
  left: 0px;
  top: -40px;
}

.container {
  padding-top: 40px;
  padding-left: 40px;
  position: relative;
}

.content {
  margin-top: 25px;
  padding: .5rem;
  padding-left: 100px;
}

.separator {
  margin-right: 15px;
}
</style>