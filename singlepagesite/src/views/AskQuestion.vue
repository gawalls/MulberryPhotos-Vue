<template>
  <div>
    <QuestionForm
      @handleSubmit="submitQuestion"
      @handleFormValidationError="raiseValidationError"
    />
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
      this.$notify({
        group: "notification",
        title: "Submitted",
        type: "success",
        text: "Your Question has been asked."
      });
      this.$notify({
        group: "notification",
        title: "Wait for Response",
        text: "An answer will be emailed to you."
      });
    },
    raiseValidationError() {
      this.$notify({
        group: "notification",
        title: "Form is incomplete",
        type: "error",
        text: "Please fill in all fields on the form."
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
