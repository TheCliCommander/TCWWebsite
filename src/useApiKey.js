const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.MONGODB_API_KEY;
const apiUrl = 'https://cloud.mongodb.com/api/atlas/v1.0';

async function fetchData() {
  try {
    const response = await axios.get(`${apiUrl}/groups`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    console.log('Data fetched:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();