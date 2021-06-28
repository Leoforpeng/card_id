<template>
  <div id="app">
    <ReadCard />
  </div>
</template>

<script>
import ReadCard from './components/ReadCard.vue'

export default {
  name: 'App',
  components: {
    ReadCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
