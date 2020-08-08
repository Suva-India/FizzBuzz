// define api route

const express = require('express');
const { param, validationResult } = require('express-validator');
const fb = require('../util/fizzbuzz_mod.js');

const router = express.Router();

router.get(
    '/api/:count',
    [
        param('count')
            .isInt({ min: 1, max: 100 })
            .withMessage(
                'Expecting URL in the format /api/<<number>>, number must be between 1 and 100'
            ),
    ],

    (req, res, next) => {
        let fizzbuzzArray;
        let validationerr = {};
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                validationerr = errors.mapped();
                return res.status(400).json(validationerr.count.msg);
            }

            const { count } = req.params;
            fizzbuzzArray = fb.fizzbuzzArray(count);
            return res.json({ fizzbuzzArray });
        } catch (err) {
            next(err);
        }
    }
);

module.exports = router;
