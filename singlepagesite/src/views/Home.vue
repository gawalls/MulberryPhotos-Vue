<template>
  <div id="home">    
    <div v-for="(pageCont, index) in Content" :key="index">
      <WebPage :pageContent="pageCont" />
    </div>
  </div>
</template>

<script>
import WebPage from "@/components/WebPage";

export default {
  name: "Home",
  components: {
    WebPage        
  },
  data() {
    return {
      Content: [
        {"Title": "Title 1", "Body": "<p>This is the body of the first</p>"},
        {"Title": "Title 2", "Body": "This is the body of the second"}
      ],
    };
  },
};
</script>
<style scoped lang="scss">
  #home {
    color: black;
  }
</style>
