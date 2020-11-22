<template>
  <div id="app">
    <MainMenuNavBar />
  </div>
</template>

<script>
import MainMenuNavBar from "@/components/MainMenuNavBar.vue";

export default {
  name: "App",
  components: { MainMenuNavBar }
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
