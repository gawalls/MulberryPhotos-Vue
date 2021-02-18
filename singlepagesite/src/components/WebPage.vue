<template>
  <div class="pageContent" v-if="pageContent != undefined">    
    <h5 class="content-title is-size-4">{{ pageContent.Title }}</h5>
    <div class="content-body" v-html="pageContent.Body" ></div>    
    <hr />
  </div>
</template>

<script>
export default {
  name: "WebPage",
  props: {
    pageContent: undefined
  },
};
</script>

<style scoped lang="scss">
  .pageContent {
    padding-bottom: 10px;
  }

  .content-title {
    font-weight: bold;
    font-style: italic;
  }

  .content-body {
    padding-left: 20px;
    padding-top: 10px;
  }
</style>
