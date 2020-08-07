const express = require('express');

const api = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

app.use('/', api);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
