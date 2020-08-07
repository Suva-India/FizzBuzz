const express = require('express');
const fb = require('../util/fizzbuzz_mod.js');

const router = express.Router();

router.get('/api/:count([1-9][0-9]?[0]?)', (req, res) => {
    const { count } = req.params;
    const fizzbuzzArray = fb.fizzbuzzArray(count);
    res.json({ fizzbuzzArray });
});

module.exports = router;
