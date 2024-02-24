import Express  from "express";
import cors from "cors";
import { loginRoute } from "./routes/login.js";
import { connectToDb } from "./db/dbConnetion.js";
import { registerRoute } from "./routes/register.js";
import { forgotRouter } from "./routes/forgotPassword.js";
import { resetPasswordRoute } from "./routes/resetPass.js";

const app = Express();

const port = process.env.PORT || 5010

await connectToDb()

// middleWare

app.use(Express.json())

app.use(cors())

app.use('/login', loginRoute)

app.use('/register', registerRoute)

app.use('/forgotPassword', forgotRouter)

app.use('/resetPassword', resetPasswordRoute)


app.get('/', (req,res)=>{
    console.log('')
    res.send('reset form')
})

app.listen(port, ()=> console.log('Server is running on : ', port))