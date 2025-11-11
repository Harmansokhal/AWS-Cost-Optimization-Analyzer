require('dotenv').config();
module.exports = {
port: process.env.PORT || 4000,
mongoUri: process.env.MONGO_URI || 'mongodb://mongo:27017/aws_cost',
jwtSecret: process.env.JWT_SECRET || 'change-me',
ingestChunkSize: 1000
};
