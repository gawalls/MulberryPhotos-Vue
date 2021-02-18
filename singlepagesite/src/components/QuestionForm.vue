<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Your Name"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          v-model="email"
          class="input"
          type="email"
          placeholder="Your Email"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Question</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Ask your question"
          v-model="question"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="submitQuestion">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      name: "",
      email: "",
      question: "",
      hasError: false,
      errorMessage: ""
    };
  },
  methods: {
    submitQuestion() {
      if (this.formIsValid() == true) {
        //the code to save the submit will go here - via the dataService.

        this.name = "";
        this.question = "";
        this.$emit("handleSubmit");
      }
    },
    formIsValid() {
    //name
    //email
    //question
    return true;
    },
  },  
};
</script>

<style lang="scss" scoped></style>
