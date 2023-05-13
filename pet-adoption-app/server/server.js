const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Array to store the form data
const formDataArray = [];

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/adopt', (req, res) => {
  const formData = req.body;
  console.log('Adoption form data:', formData);

  // Save the form data to the array
  formDataArray.push(formData);

  res.status(201).json({ message: 'Form data saved.' });
});

app.get('/adopt', (req, res) => {
  // Retrieve the stored form data
  res.json(formDataArray);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
