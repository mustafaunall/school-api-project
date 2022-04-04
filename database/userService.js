const { MongoClient } = require('mongodb')

require('dotenv').config()
const { MONGO_URI, DB_NAME } = process.env

class UserService {
    dbClient = new MongoClient(MONGO_URI)

    Get = async (...filter) => {
        return new Promise((resolve, reject) => {
            await dbClient.connect()
            const users = dbClient.db(DB_NAME).collection('users').findOne({ ...filter })
        })
    }
}

module.exports = UserService