import express from "express" 
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


//  middlewares

app.use(express.json({limit: "16kb"})); // data from Forms
app.use(express.urlencoded({extended: true, limit: "16kb"})) // data from URL
app.use(express.static("public"))  // for storing public assets
app.use(cookieParser())


export { app };