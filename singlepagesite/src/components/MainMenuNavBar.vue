<template>
  <div class="columns">
    <div class="column">
      <div id="nav" class="is-hidden-mobile">
        <router-link to="/home">Content</router-link> |
        <router-link to="/about">Contact us</router-link> |
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
}
</style>
