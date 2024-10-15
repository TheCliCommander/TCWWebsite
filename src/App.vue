<template>
    <div id="app">
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  
  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Footer
    }
  })
  </script>
  
  <style>
  @import './assets/style.css';
  
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #F4F1E9;
  }
  </style>