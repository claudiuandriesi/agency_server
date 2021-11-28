require('dotenv').config()

if (!process.env.PORT) {
    throw new Error('Application port is not specified');
}

if (!process.env.MONGO_DB_USER) {
    throw new Error('Mongo DB user is not specified');
}

if (!process.env.MONGO_DB_PASSWORD) {
    throw new Error('Mongo DB password is not specified');
}

if (!process.env.MONGO_DB_NAME) {
    throw new Error('Mongo DB name is not specified');
}

if (!process.env.MONGO_DB_CLUSTER_NAME) {
    throw new Error('Mongo DB cluster name is not specified');
}
const locals = Object.freeze({
        port: process.env.PORT,
        database: {
            mongoDB: {
                name: process.env.MONGO_DB_NAME,
                clusterName: process.env.MONGO_DB_CLUSTER_NAME,
                userName: process.env.MONGO_DB_USER,
                password: process.env.MONGO_DB_PASSWORD,
            },
        },
    }
)

module.exports = locals;