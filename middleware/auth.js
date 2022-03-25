const auth = (req, res, next) => {
    // console.log(`Authendication has running | ${new Date().toLocaleString()}`)
    next()
}
module.exports = auth