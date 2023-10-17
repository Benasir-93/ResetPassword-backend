import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbconfig.js'
import userRouter from './Routers/authRoutes.js'
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
 connectDB()
app.listen(port, () => {
    console.log("app is listening with port =>",port );
})