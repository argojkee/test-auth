const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth')

const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/', authRoute)

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  });

module.exports = app
