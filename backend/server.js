const app = require('./app');
require('dotenv').config()

const {PORT = 3000} = process.env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});