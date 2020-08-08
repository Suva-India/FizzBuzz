// importing express module
const express = require('express');

// importing local modules
const api = require('./routes/api');
const errhandler = require('./middlewares/err');

// initiate express app
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

// api route
app.use('/', api);

// error handling middleware
app.use(errhandler);

// initiating server listener
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
