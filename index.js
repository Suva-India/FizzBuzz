const express = require('express');

const api = require('./routes/api');

const app = express();
const port = 3000;

app.use('/', api);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
