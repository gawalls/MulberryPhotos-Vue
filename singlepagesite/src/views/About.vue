<template>
  <div class="home">
    <button @click="showModal = true">Show Modal</button>
    <Modal
      message="Are you sure you would like confirm?"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="handleModalYes"
    >
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal";
import { data } from "../shared";

export default {
  name: "About",
  data() {
    return {
      contents: [],
      showModal: false
    };
  },
  components: {
    Modal
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.contents = [];
      this.contents = await data.getData();
    },
    closeModal() {
      this.showModal = false;
    },
    handleModalYes() {
      this.closeModal();
      alert("modal save");
      //code will go here to deal with yes
    }
  }
};
</script>
