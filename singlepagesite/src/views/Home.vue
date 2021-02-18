<template>
  <div id="home">
    <div v-for="(pageCont, index) in content" :key="index">
      <WebPage :pageContent="pageCont" />
    </div>    
  </div>
</template>

<script>
import { data } from "../shared";
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
</style>
