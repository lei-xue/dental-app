const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  try {
    const { email } = req.body;
    const scriptURL = process.env.REACT_APP_GOOGLE_FORM_URL;
    console.log('Script URL:', scriptURL);
    const urlWithParams = `${scriptURL}?email=${encodeURIComponent(email)}`
    const response = await axios.post(urlWithParams)
    res.json(response.data);
  } catch (error) {
    console.error('Error submitting email:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
