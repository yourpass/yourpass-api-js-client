require('dotenv').config()

module.exports = {
    clientId:process.env.TEST_CLIENT_ID,
    clientSecret:process.env.TEST_CLIENT_SECRET,
    username:process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
}