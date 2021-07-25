const mongoose = require('mongoose')
const db = process.env.MONGOURI

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false      
})
.then(() => { console.log('Database is connected...') })
.catch((err) => console.log(err))

mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected to database')
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected')
})

process.on('SIGINT', async() => {
    await mongoose.connection.close()
    process.exit(0);
})