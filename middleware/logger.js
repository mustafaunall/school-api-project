const fs = require('fs')
const path = require('path')
const fsp = fs.promises

const loggerSetup = async (message, logName) => {
    const date = new Date().toLocaleString().replace(',', '')
    const logMessage = `${date}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsp.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsp.appendFile(path.join(__dirname, '..', 'logs', `${logName}.log`), logMessage)
    }
    catch (e) {
        console.log(e)
    }
}

const logger = (req, res, next) => {
    loggerSetup(`${req.method}\t${req.url}`, 'common')
    next()
}

module.exports = logger