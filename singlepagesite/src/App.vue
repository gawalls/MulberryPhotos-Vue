<template>
  <div id="app">
    <section id="navBar">
      <MainMenuNavBar />
    </section>
    <section id="headerBanner">
      <div class="columns is-vcentered is-centered">
        <div class="column is-hidden-touch is-one-third">
          <div class="image is-3by1">
            <img isfullwidth src="./assets/HeroImage1.jpg" />
          </div>
        </div>
        <div class="column has-text-centered">
          <h1 class="headerBannerH1 title is-size-3-mobile is-size-1-tablet">
            Mulberry Photos
          </h1>
        </div>
        <div class="column is-hidden-touch is-one-third">
          <div class="image is-3by1">
            <img isfullwidth src="./assets/HeroImage2.jpg" />
          </div>
        </div>
      </div>
    </section>
    <section id="mainOutput">
      <div class="">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import MainMenuNavBar from "@/components/MainMenuNavBar.vue";

export default {
  name: "App",
  components: {
    MainMenuNavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap");
@import "@/assets/scss/index.scss";

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

#headerBanner {
  padding: 0em;
  background-color: black;
  text-align: left;
  color: white;

  .headerBannerH1 {
    color: white;
    font-style: italic;
    font-weight: 300;
  }
}

#mainOutput {
  text-align: left;
  padding: 3em;
}
</style>
