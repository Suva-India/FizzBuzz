// define custom error-handling middleware function

// eslint-disable-next-line no-unused-vars
function errhandler(err, req, res, next) {
    return res.status(500).send(err.message);
}

module.exports = errhandler;
