<template>
    <div class="articles">
        <ArticlesCarousel :issues="issues" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ArticlesCarousel from '../components/ArticlesCarousel.vue';
import ArticleDropdown from '../components/ArticleDropdown.vue';

export default defineComponent({
    components: {
        ArticlesCarousel,
        ArticleDropdown
    },
    data() {
        return {
            issues: [],
            articles: [], // Added articles array
            selectedIssue: null,
            dropdownVisible: false,
        }
    },
    methods: {
        openDropdown(issue) {
            this.selectedIssue = issue;
            this.dropdownVisible = true;
        },
        closeDropdown() {
            this.dropdownVisible = false;
        }
    },
    mounted() {
        // Fetch issues
        fetch('/issues.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched issues:', data);
                this.issues = data; // Assign to issues
            })
            .catch(error => console.error('Error fetching issues:', error));

        // Fetch articles
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched articles:', data);
                this.articles = data; // Assign to articles
            })
            .catch(error => console.error('Error fetching articles:', error));
    }
});
</script>

<style>
.articles {
    padding: 60px;
    margin-top: 100px;
}
.articles-list {
    margin-top: 600; /* space between carousel and articles */
}

.carousel {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
}
.carousel-item {
    width: 2in;
    height: 2in;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    background-color: rgba(244, 241, 233);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    cursor: pointer;
}
.article-item {
    margin: 0;
    margin-bottom: 15px; /* space between articles */
    padding: 10px;
    background-color: rgba(244, 241, 233);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: red;
}
.article-item p {
    transition: max-height 0.3s ease; /* Smooth transition for height change */
}
</style>