const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://thecapitalworker:Th3D3%40th%40gony0FCapitalism%21%21%21@twc-shard-00-00.47mzs.mongodb.net/TCW?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Failed to connect to MongoDB Atlas', err));