<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home />
  </div>
</template>

<script>
import Home from "./views/HomePage.vue"; // Asegúrate de tener la ruta correcta aquí

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
