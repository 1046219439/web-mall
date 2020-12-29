<template>
  <div class="app">
    <NavTop />
    <router-view />
    <bottomFooter />
  </div>
</template>

<script>
import NavTop from './components/NavTop'
import bottomFooter from './components/bottomFooter'
export default {
  name: 'App',
  components: {
    NavTop,
    bottomFooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(26, 57, 77);
}
</style>
