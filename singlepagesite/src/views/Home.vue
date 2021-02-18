<template>
  <div id="home">
    <div v-for="(pageCont, index) in content" :key="index">
      <WebPage :pageContent="pageCont" />
    </div>
    <router-link to="/contact" class="button is-success">Contact us</router-link>
    <router-link to="/askquestion" class="button is-warning">Ask Question</router-link>
  </div>
</template>

<script>
import { data } from "@/shared";
import WebPage from "@/components/WebPage";

export default {
  name: "Home",
  components: {
    WebPage
  },
  async created() {
    await this.loadData();
  },
  data() {
    return {
      content: []
    };
  },
  methods: {
    async loadData() {
      this.content = [];
      this.content = await data.getData();
    }
  }
};
</script>
<style scoped lang="scss">
#home {
  color: black;
}

.button {
  margin-right: 1em;
}
</style>
