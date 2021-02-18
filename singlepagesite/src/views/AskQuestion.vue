<template>
  <div>
    <QuestionForm @handleSubmit="submitQuestion" />
  </div>
</template>

<script>
import QuestionForm from "@/components/QuestionForm";

export default {
  name: "AskQuestion",
  components: {
    QuestionForm
  },
  methods: {
    submitQuestion() {
      console.log('submit clicked');
      this.$notify({
        group: "notification",
        title: "Submitted",
        type: "success",
        text: "Your Question has been asked",        
      });
      this.$notify({
        group: "notification",
        title: "Wait for Response",
        text: "An answer will be emailed to you", 
      });      
    }
  }
};
</script>

<style lang="scss" scoped></style>
