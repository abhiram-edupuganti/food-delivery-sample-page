const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer
const mongoDB=require("./db");
mongoDB();
// Define a route
app.get('/', (req, res) => {
  res.send('Hello This is Your BackEnd!');
});
app.use(express.json());

app.use('/api',require('./Routes/CreateUser'));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
