<template>
    <div v-if="visible" class="dropdown">
        <h4>{{ issue.title }}</h4>
        <ul>
            <li v-for="article in issue.articles" :key="article">
                {{ article }}
            </li>
        </ul>
        <button @click="close">Close</button>
    </div>
</template>

<script>
export default {
    props: {
        issue: {
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
.dropdown {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 200; /* Ensure it appears above other content */
    width: 80%;
    max-width: 500px;
    text-align: left;
}

.dropdown h4 {
    margin-bottom: 15px;
    text-align: center;
}

.dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
}

.dropdown ul li {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.dropdown ul li:last-child {
    border-bottom: none;
}

.dropdown button {
    display: block;
    margin: 0 auto;
    padding: 8px 16px;
    background-color: #C0392B;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.dropdown button:hover {
    background-color: #8D9B83; /* Muted earthy green */
}
</style>