<template>
    <div>
        <h1>List of ninjas</h1>
        <ul>
            <li :key="i" v-for="(ninja, i) in ninjas">{{ ninja }}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  },
  methods: {
  }
}
</script>
<style scoped>
    h1 {
        color: green;
    }
</style>
