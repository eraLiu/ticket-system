const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const colors = require('colors')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Routes
app.get('/', (req,res) =>{
    res.status(200).json({message:'welcome to the support api'})
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))