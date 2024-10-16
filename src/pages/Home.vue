<template>
  <div>
    <Header />
      <main>
        <div class="container">
        <h2 v-html="homeContent.title"></h2>
        <p v-html="homeContent.content"></p>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const homeContent = ref({});

    fetch('/home.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          homeContent.value = data[0];
        }
      })
      .catch(error => console.error('There was a problem with the fetch operation', error));

    return {
      homeContent
    };
  }
});
</script>

<style>
.container {
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
  margin: 20px;
  margin-top: 55px;
}
</style>