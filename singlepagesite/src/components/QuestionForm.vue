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
        <button class="button is-success" @click="showModal = true">
          Submit
        </button>
      </div>
    </div>

    <Modal
      message="Are you sure you would like to ask this question?"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="submitQuestion"
    >
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "QuestionForm",
  components: { Modal },
  data() {
    return {
      name: "",
      email: "",
      question: "",
      hasError: false,
      showModal: false,
      errorMessage: ""
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    submitQuestion() {
      this.closeModal();

      if (this.formIsValid() == true) {
        //the code to save the submit will go here - via the dataService.

        this.name = "";
        this.question = "";
        this.$emit("handleSubmit");
      } else {
        this.$emit("handleFormValidationError");
      }
    },
    formIsValid() {
      this.hasError = false;

      if (
        this.name == "" ||
        this.email == "" ||
        this.question == "" ||
        this.question == ""
      ) {
        this.hasError = true;
      }
      return this.hasError == false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
