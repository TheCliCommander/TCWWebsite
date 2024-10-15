<template>
    <footer>
      <div class="footer-content">
        <div class="social-links">
          <a href="mailto:thecapitalworker@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
          <a href="https://venmo.com/your-venmo-username" target="_blank" rel="noopener noreferrer">Venmo</a>
          <a href="/" class="site-link">The Capital Worker</a>
        </div>
        <div class="copyright">
          &copy; {{ currentYear }} The Capital Worker. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  }
  </script>
  
  <style scoped>
  footer {
    background-color:#b0aeae;
    padding: 10px 0;
    margin-top: auto;
    font-size: 0.8em;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-links {
    margin-bottom: 10px;
  }
  
  .social-links a {
    color: #FFFFFF;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .social-links a:hover {
    color: #8D9B83;
  }
  
  .site-link {
    font-weight: bold;
  }
  
  .copyright {
    font-size: 0.9em;
  }
  </style>