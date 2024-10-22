import  express  from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import authRoute from "./Routes/AuthRoute.js"
import cors from "cors"
import http from "http"
import { connectDB } from "./data/database.js";
const app = express();
config({
  path:"./config.env"
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
authRoute.use(cors())
app.use(authRoute)
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
  res.json("working")
})

connectDB();
app.listen(process.env.PORT,()=>{ 
    console.log("server is working")
})            
                                                                                                              