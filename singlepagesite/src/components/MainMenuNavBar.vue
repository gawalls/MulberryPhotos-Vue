<template>
  <div class="columns">
    <div class="column">
      <div id="nav" class="is-hidden-mobile">
        <img id="nav-logo" src="@/assets/mulberry_photos_header.jpg" />
        <router-link to="/home">About us</router-link> |
        <router-link to="/contact">Contact us</router-link> |
        <router-link to="/askquestion">Ask a question</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenuNavBar"
};
</script>

<style lang="scss" scoped>
#nav {
  text-align: right;
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  #nav-logo {
    padding-right: 1em;
    padding-top: 1em;
  }
}
</style>
