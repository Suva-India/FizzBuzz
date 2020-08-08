// define custom error-handling middleware function

function errhandler(err, req, res) {
    res.status(500).send(err.message);
    return res;
}

module.exports = errhandler;
