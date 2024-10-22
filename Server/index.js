import  express  from "express";
import { config } from "dotenv";
const app = express();
config({
  path:"./config.env"
})
app.use(express.json());
app.get("/",(req,res)=>{
  res.json("working")
})

app.listen(process.env.PORT,()=>{ 
    console.log("server is working")
})            
                                                                                                              