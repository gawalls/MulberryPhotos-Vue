<template>
  <div id="app">
    <section id="headerBanner">      
      <div class="columns is-vcentered is-centered">
        <div class="column is-hidden-touch is-one-third">          
          <div class="image is-3by1">
          <img isfullwidth src="./assets/HeroImage1.jpg"/>                
          </div>
        </div>        
        <div class="column has-text-centered">
          <h1 class="headerBannerH1 title is-1">Mulberry Photos</h1>
        </div>
        <div class="column is-hidden-touch is-one-third">          
          <div class="image is-3by1">
            <img isfullwidth src="./assets/HeroImage2.jpg"/>                          
          </div>
        </div>
      </div>      
    </section>
    <div id="columns">      
    </div>
  </div>
</template>

<script>

export default {
  name: "App"
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
