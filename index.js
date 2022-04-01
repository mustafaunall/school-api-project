const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./middleware')
const { MongoClient } = require('mongodb')

const axios = require('axios')
require('dotenv').config()
const { PORT, MONGO_URI } = process.env
const appVersion = require('./package.json').version

const getUsers = (userId = null) => new Promise((resolve, reject) => {
    let url = `https://jsonplaceholder.typicode.com/users`
    if (userId) url += `/${userId}`
    axios.get(url)
    .then(res => {
        resolve(res.data)
    })
    .catch(e => reject(e))
})

app.use(cors())
app.use(express.json())

app.use(middleware.auth)
app.use(middleware.logger)
app.use(middleware.errorHandler)

app.get('/users', async (req, res) => {
    let data = await getUsers()
    res.status(200).send(data)
})

app.get('/user/:userId', async (req, res) => {
    let { userId } = req.params
    let data = await getUsers(userId)
    res.status(200).send(data)
})

app.get('/version', (req, res) => {
    res.status(200).json({
        version: appVersion
    })
})

app.listen(5000, () => {
    console.log(`API started on localhost:${PORT}`);
})
