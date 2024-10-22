import  express  from "express";
import { config } from "dotenv";
import { connectDB } from "./data/database.js";
const app = express();
config({
  path:"./config.env"
})
app.use(express.json());
app.get("/",(req,res)=>{
  res.json("working")
})

connectDB();

app.listen(process.env.PORT,()=>{ 
    console.log("server is working")
})            
                                                                                                              