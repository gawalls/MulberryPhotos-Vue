<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { data } from "../shared";

export default {
  name: "Home",
  data() {
    return {
      tData: []
    };
  },
  components: {
    HelloWorld
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.tData = [];
      this.tData = await data.getTestData();
    }
  }
};
</script>
