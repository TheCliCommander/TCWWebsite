<template>
  <div class="contact">
    <!-- Added descriptive text above the Contact Us header -->
    <p>
    <strong>There is a great power that lies just below the surface of working-class consciousness. It yearns to burst free and actualize itself. It is the greatest power known to humanity: the power of a united working class! This power has been repressed, abused, and confused for far too long. But it is still there, and it is waking up...</strong>
    </p>
    <p>
      <strong>Are you tired of voting for the lesser evil and relying on self-interested political representatives to beg the state for your well-being? We at The Capital Worker certainly are. We don't see any signs of improvement coming—not ever. The only way we can fix this mess is together. The working class must unite and build solidarity networks that provide for one another's daily needs and create a Jefferson City we can truly be proud of. We know it's possible. History has proven it time and time again. Sign up below to feed your motivation for change and unleash our collective power!</strong>
    </p>
    
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required placeholder="Name (required)"/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required placeholder="Email (required)"/>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="form.location" placeholder="City/State(required), Neighborhood/Campus(optional)" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required placeholder="Tell us about yourself, why are you interested in signing up?">
        </textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DOMPurify from 'dompurify';

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      location: '', // Added location field
      message: ''
    });

    const submitForm = async () => {
      // Basic Validation
      if (!form.value.name || !form.value.email || !form.value.message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Email Format Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.value.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Sanitizing Inputs
      const sanitizedForm = {
        name: DOMPurify.sanitize(form.value.name),
        email: DOMPurify.sanitize(form.value.email),
        location: DOMPurify.sanitize(form.value.location),
        message: DOMPurify.sanitize(form.value.message),
      };

      try {
        const response = await fetch('/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sanitizedForm)
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          // Reset form
          form.value = {
            name: '',
            email: '',
            location: '',
            message: ''
          };
        } else {
          // Handle validation errors from the server
          const errorMessages = result.errors.map(err => err.msg).join('\n');
          alert(`Error:\n${errorMessages}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again later.');
      }
    };

    return {
      form,
      submitForm
    };
  }
});
</script>

<style scoped>
.contact {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 80px; /* Added margin to lower the h1 */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  max-width: 300px;
  padding: 8px;
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
}
input:focus, textarea:focus {
  border: 2px solid #8d9b83;
  outline: none; 
}
button {
  background-color: #C0392B;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #8D9B83;
}
</style>