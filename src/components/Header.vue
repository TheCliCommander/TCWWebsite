<template>
    <header>
      <div class="header-content">
        <div class="left">
          <button @click.stop="toggleMenu" class="menu-button" aria-label="Toggle navigation menu">
            <!-- Hamburger icon SVG -->
            <svg width="48" height="48" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        
        <div class="center">
          <span class="title">The Capital Worker</span>
        </div>
        
        <div class="right">
          <!-- Placeholder to balance the layout -->
        </div>
        
        <nav :class="{ open: isMenuOpen }" class="nav-menu">
          <ul>
            <li><router-link to="/" @click="isMenuOpen = false">Home</router-link></li>
            <li><router-link to="/about" @click="isMenuOpen = false">About</router-link></li>
            <li><router-link to="/articles" @click="isMenuOpen = false">Articles</router-link></li>
            <li><router-link to="/podcasts" @click="isMenuOpen = false">Podcasts</router-link></li>
            <li><router-link to="/contact" @click="isMenuOpen = false">Contact</router-link></li>
            <li><router-link to="/tools-guides" @click="isMenuOpen = false">Tools & Guides</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  export default defineComponent({
    name: 'Header',
    setup() {
      const isMenuOpen = ref(false);
      const toggleMenu = () => {
        console.log('Menu toggled')//debug step
        isMenuOpen.value = !isMenuOpen.value;
      };

      const handleClickOutside = (event) => {
        const menu = document.querySelector('.nav-menu');
        if (menu && !menu.contains(event.target) && isMenuOpen.value) {
          isMenuOpen.value = false;
        }
      };
      onMounted( () => {
        document.addEventListener('click', handleClickOutside);
      });
      onBeforeUnmount( () => {
        document.removeEventListener('click', handleClickOutside);
      });
      return { isMenuOpen, toggleMenu };
    }
  });
  </script>
  
  <style scoped>
  header {
    background-color: #b0aeae;
    padding: 10px 20px; /* Horizontal padding for symmetry */
    position: fixed;
    top: 10px; /* Added top gap */
    left: 50%;
    transform: translateX(-50%); /* Center the header horizontally */
    width: calc(100% - 40px); /* Account for left and right padding */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 100;
    border-radius: 10px; /* Maintained border-radius */
    font-size: 1.75em;
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
  }
  
  .left, .center, .right {
    display: flex;
    align-items: center;
  }
  
  .left {
    justify-content: flex-start;
  }
  
  .center {
    justify-content: center;
  }
  
  .right {
    justify-content: flex-end;
    min-width: 24px; /* Ensures symmetry with the left side */
  }
  
  .title {
    color: #f6f8fe; /* Preserved desired text color */
    font-size: 2em;
    font-weight: bold;
  }
  
  .menu-button {
    background: none;
    border: none; /* Added missing semicolon */
    cursor: pointer;
    color: #f6f8fe; /* Preserved desired color */
  }
  
  .nav-menu {
    display: none;
    width: max-content;
    background-color: hsla(0, 0%, 20%, 0.95); /* Semi-transparent background */
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 101;
  }
  
  .nav-menu.open {
    display: block;
  }
  
  .nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-menu ul li {
    padding: 10px 0;
    text-align: center;
    color: yellow !important;
  }
  
  /* Adjust the hamburger icon color on hover */
  .menu-button:hover svg path {
    stroke: #8D9B83; /* Muted earthy green on hover */
  }
  
  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .header-content {
      padding: 0 10px;
    }
  
    .right {
      min-width: 20px; /* Adjusted to maintain symmetry on smaller screens */
    }
  
    .title {
      font-size: 2.2em;
    }
  
    .menu-button svg {
      width: 80px;
      height: 80px;
    }
  }
  </style>