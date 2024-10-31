<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <h2 class="three-d-title" v-html="homeContent.title"></h2>
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
  padding: 5px;
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
  margin: 20px;
  margin-top: 50px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%),
    url('@/assets/images/capitolConstruction.png');
  background-size: auto;
  background-position: right center;
  background-repeat: no-repeat;
}

.three-d-title {
  font-size: 3em;
  color: #ab1c03;
  text-shadow: 2px 2px 0 #242423,
               4px 4px 0 #8d9b83,
               6px 6px 0 #c0392b;
  transform: perspective(500px) rotateX(10deg) rotateY(10deg);
  transition: transform 0.3s ease;
}

.three-d-title:hover {
  transform: perspective(500px) rotateX(0deg) rotateY(0deg);
}
@media (max-width: 768px) {
  .three-d-title {
    font-size: 3em;
    margin-top: 40px;
  }
  body {
    font-size: 12px;
    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 12px;
    }
  }
}
</style>