<template>
  <div class="about">
    <input type="text" ref="about_input" />
    <button type="button" @click="readRef">Read Ref</button>
  </div>
</template>


<script>
export default {
  name: 'About',
  methods: {
    readRef() {
      console.log(this.$refs.about_input.value)
    }
  }
}
</script>
