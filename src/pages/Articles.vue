<template>
    <div class="articles">
        
        <ArticlesCarousel :issues="issues" />
        <div class="articles-list">
            <div v-for="article in articles" :key="article.id"  :id="`article-${article.id}`" class="article-item">
                <div class="fade-text" :style="{ opacity: textOpacity }">v-html="article.title"></div>
                <div class="fade-text" :style="{ opacity: textOpacity }" v-if="article.content" v-html="article.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
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
        fetch('/issues.json')
            .then(response => response.json())
            .then(data => {
                this.issues = data;
            })
            .catch(error => console.error('Error fetching issues:', error));
    }
});
</script>

<style>
.articles {
    padding: 60px;
}
.articles-list {
    margin-top: 600; /* space between carousel and articles */
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