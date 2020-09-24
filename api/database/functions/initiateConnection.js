const mongoose = require('mongoose')
module.exports = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    
    mongoose.set('useCreateIndex', true)
    mongoose.Promise = global.Promise
    const conn = mongoose.connection

    conn.on('connected', () => console.log('Successfully connected to database'))
    conn.on('error', console.error.bind(console, 'MongoDB connection error:'))

    process.on('SIGINT', function() {
        conn.close(function () {
            console.log('Mongoose default connection with DB is disconnected through app termination')
            process.exit(0)
        })
    })
}
