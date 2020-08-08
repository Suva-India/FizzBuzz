// define custom error-handling middleware function

function errhandler(err, req, res, next) {
    return res.status(500).send(err.message);
}

module.exports = errhandler;
