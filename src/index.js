import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/api/stores', async (req, res) => {

  try {
    const response = await axios.get(`https://petstore3.swagger.io/api/v3/store/inventory`);

    res.status(200).json({
      success: true,
      message: response.data
    });

  } catch (err) {
    res.status(err.response.status).json({
      success: false,
      message: err.response.statusText
    });
  }
});


app.post('/api/stores', async (req, res) => {
  const store = req.body;

  try {
    const response = await axios.post('https://petstore3.swagger.io/api/v3/store/order', store);


    res.status(201).json({
      success: true,
      message: response.data
    });

  } catch (err) {
    res.status(err.response.status).json({
      success: false,
      message: err.response.statusText
    });
  }
});


app.listen(3000);