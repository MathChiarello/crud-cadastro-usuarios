const express = require('express');

const app = express();
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use('/users', usersRoutes);

module.exports = app;