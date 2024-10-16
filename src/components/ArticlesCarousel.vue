<template>
    <div class="articles-carousel">
      <h4>Select an issue for a list of its articles. Click an article to read it in full!</h4>
      <div class="carousel">
        <button 
          v-for="issue in issues" 
          :key="issue.id" 
          class="carousel-item"
          @click="selectIssue(issue)"
        >
          {{ issue.title }}
        </button>
      </div>
      <ArticleDropdown 
        :issue="selectedIssue" 
        :visible="dropdownVisible" 
        @close="closeDropdown" 
        @article-selected="openArticle"
      />
      <ArticleScrollBox 
        :article="selectedArticle" 
        :visible="scrollBoxVisible" 
        @close="closeScrollBox"
      />
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import ArticleDropdown from './ArticleDropdown.vue';
  import ArticleScrollBox from './ArticleScrollBox.vue';
  
  export default defineComponent({
    name: 'ArticlesCarousel',
    components: {
      ArticleDropdown,
      ArticleScrollBox
    },
    props: {
      issues: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      const selectedIssue = ref(null);
      const dropdownVisible = ref(false);
      const selectedArticle = ref({ title: '', content: '' });
      const scrollBoxVisible = ref(false);
  
      const selectIssue = (issue) => {
        selectedIssue.value = issue;
        dropdownVisible.value = true;
      };
  
      const closeDropdown = () => {
        dropdownVisible.value = false;
      };
  
      const openArticle = (articleTitle) => {
        // Fetch or set the article content based on the title
        console.log('opeArticle called with title', articleTitle);
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched articles: ', data);
                const article = data.find(a => a.title.includes(articleTitle));
                if (article) {
                    console.log('Article found: ', article);
                    selectedArticle.value = article;
                    scrollBoxVisible.value = true;
                } else {
                    console.log('Article not found: ', articleTitle);
                }
            })
            .catch(error => console.error('Error fetching articles:', error));
      };
  
      const closeScrollBox = () => {
        scrollBoxVisible.value = false;
      };
  
      return {
        selectedIssue,
        dropdownVisible,
        selectedArticle,
        scrollBoxVisible,
        selectIssue,
        closeDropdown,
        openArticle,
        closeScrollBox
      };
    }
  });
  </script>