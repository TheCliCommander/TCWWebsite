<template>
  <div>
    <Header />
      <main>
        <div class="container">
        <h2 class="fade-text" :style="{ opacity: textOpacity }" v-html="homeContent.title"></h2>
        <p class="fade-text" :style="{ opacity: textOpacity }" v-html="homeContent.content"></p>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  
export default defineComponent( {
    name: 'Home',
    setup() {
      const textOpacity = ref(1); //Initial opacity
      const homeContent = ref({ title: '', content: '' });//Store fetched content
      const handleScroll = () => {
        const scrollY = window.scrollY; // Get current scroll position
        console.log("Scroll position:", scrollY);
        const maxScroll = 50; //Adjust based on when you want text to disappear
        textOpacity.value = Math.max(0, 1 - scrollY / maxScroll ); //calculate opacity
      };
      onMounted(() => {
        console.log("Home component mounted");
        window.addEventListener('scroll', handleScroll); //Add scroll event listener
        window.addEventListener('touchmove', handleScroll);

        //Fetch the JSON data
        fetch('/home.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
           if (data.length > 0) {
            homeContent.value = data[0];//Assuming you want the first item
           }
          })
          .catch(error => console.error('There was a problem with the fetch operation', error));
      });

      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll); //Clean up
        window.removeEventListener('touchmove', handleScroll);
      });

      return {
        textOpacity,
        homeContent
      };
    }
    
});
</script>
<style>
.fade-text {
  transition: opacity -0.5s ease; /*Smooth transition for opacity */
}
.container {
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
  margin: 20px;
  margin-top: 55px;
}
</style>