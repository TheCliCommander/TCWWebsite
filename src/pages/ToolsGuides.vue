<template>
    <div class="tools-guides">
      <h1>Tools & Guides</h1>
      <div class="tools-guides-container">
      <div v-if="guides.length">
        <section v-for="guide in guides" :key="guide.id" class="guide-section">
          <h2>{{ guide.title }}</h2>
          <p>
            <strong>{{ guide.description }}</strong>
          </p>
          <a :href="guide.pdfLink" target="_blank" rel="noopener noreferrer">View/Download PDF</a>
        </section>
      </div>
      
      
      <div v-else>
        <p>No guides available at the moment.</p>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'ToolsGuides',
    setup() {
      const guides = ref([]);
  
      // Fetch guides data from guides.json
      const fetchGuides = async () => {
        try {
          const response = await fetch('/guides.json');
          if (!response.ok) {
            throw new Error('Failed to fetch guides.');
          }
          const data = await response.json();
          guides.value = data;
        } catch (error) {
          console.error('Error fetching guides:', error);
        }
      };
  
      onMounted(() => {
        fetchGuides();
      });
  
      return {
        guides
      };
    }
  });
  </script>
  
  <style scoped>
  .tools-guides-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(245, 245, 245, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
    
  }
  .tools-guides {
    padding: 20px;
    background-color: #2c2c2c; /* Dark charcoal background */
    color: #f6f8fe ; /* Light text color for contrast */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
    margin: 20px;
    margin-top: 55px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .tools-guides h1 {
    text-align: center;
    margin-bottom: 40px;
    color: yellow; /* Highlight color */
  }
  
  .guide-section {
    margin-bottom: 30px;
  }
  
  .guide-section h2 {
    color: red; /* Highlight subheadings */
    margin-bottom: 15px;
  }
  
  .guide-section p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #f6f8fe;
  }
  
  .guide-section a {
    color: #f50eda; /* Muted earthy green for links */
    text-decoration: none;
  }
  
  .guide-section a:hover {
    text-decoration: underline;
  }
  </style>