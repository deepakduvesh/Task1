import User  from "../Models/UserModel.js"; 
import { createSecretToken }  from "../util/SecretToken.js";
import bcrypt from "bcryptjs";
 
export const Signup = async (req, res) => {
  try {   
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    } 
    const user = await User.create({ email, password, username, createdAt });

    res.status(201).json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error("i am getting error here", error); 
  }
};

export const Login = async (req, res) => {
  console.log("visiting")
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect  email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.status(201).json({ message: "User logged in successfully", success: true, token:token ,email_id:user.email,username:user.username});
     
  } catch (error) {
    console.error(error);
  }
};
