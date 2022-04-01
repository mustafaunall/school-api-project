const { MongoClient } = require('mongodb')

require('dotenv').config()
const { MONGO_URI, DB_NAME } = process.env
const dbClient = new MongoClient(MONGO_URI)

const Get = async (...filter) => {
    return new Promise((resolve, reject) => {
        await dbClient.connect()
        const users = dbClient.db(DB_NAME).collection('users').findOne({ ...filter })
    })
}