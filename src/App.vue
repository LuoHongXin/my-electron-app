<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    console.log(window.versions.node(), "window.versions.node");
    console.log(window.versions.chrome(), "versiwindow.ons.chrome");
    console.log(window.versions.electron(), "versions.electron");
    window.versions
      .ping()
      .then((res) => console.log(res, "window.versions.ping()"));
  },
};
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
