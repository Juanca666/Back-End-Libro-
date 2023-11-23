const dotenv = require('dotenv');
const config = dotenv.config();


module.exports = {
    port: process.env.PORT || 8081,
};