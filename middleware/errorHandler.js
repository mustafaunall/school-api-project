const errorHandler = (err, req, res, next) => {
    console.log(`ERROR! : ${err}`)
    res.status(500).end(err)
}

module.exports = errorHandler