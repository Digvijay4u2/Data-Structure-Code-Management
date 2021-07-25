const express = require('express')
const app = express()
const dotenv = require('dotenv')

const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

dotenv.config({path:'./config.env'})

const PORT = process.env.PORT

require('./database/connection')

app.use(require('./routes/path'))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})