const express = require('express')
const app = express()

require('dotenv').config()
const { PORT } = process.env
const appVersion = require('./package.json').version

app.get('/version', (req, res) => {
    res.status(200).json({
        version: appVersion
    })
})

app.listen(5000, () => {
    console.log(`API started on localhost:${PORT}`);
})