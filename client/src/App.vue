<template>
  <div>
    <app-header></app-header>
  </div>
</template>
<script>
// npx tailwindcss -i ./src/assets/styles/app.css -o ./public/styles/app.css --watch --minify

import AppHeader from './components/Header.vue'

import FormButtons from './components/FormAssets/FormButtons.vue'

export default {
  components: {
    'app-header': AppHeader,
    'app-button': FormButtons
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
