const express = require('express');

const router = express.Router();

router.get('/api/:count([1-9][0-9]?[0]?)', (req, res) => {
    const { count } = req.params;
    const fizzbuzzArray = [];

    for (let i = 1; i <= count; i += 1) {
        fizzbuzzArray.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
    }
    res.json({ fizzbuzzArray });
});

module.exports = router;
