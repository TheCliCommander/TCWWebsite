<template>
  <div v-if="visible" class="scroll-box">
    <div class="content">
      <h1>{{ article.title }}</h1>
      <p v-html="article.content"></p>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.scroll-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 300;
  width: 80%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}

.content {
  text-align: left;
}

button {
  display: block;
  margin: 20px auto 0;
  padding: 8px 16px;
  background-color: #C0392B;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #8D9B83;
}
</style>