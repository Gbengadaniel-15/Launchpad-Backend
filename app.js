// express
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

//routes





//middleware

const app = express()

app.use (cors());
app.use (helmet());
app.use(express.json());






//export 
export default app