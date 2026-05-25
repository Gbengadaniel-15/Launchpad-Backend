import dotenv, { config } from 'dotenv';
import app from './app.js'
import connectDb from './config/db.js'

dotenv.config()

const PORT= process.env.PORT || 5000

connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server is up and running on port ${PORT}`)
    })

})