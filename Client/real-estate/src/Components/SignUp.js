import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../Styles/LoginSignup.css'


const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    cPassword:"",
    photo:""
  });
  const { email, password, username, cPassword } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if(username.length<4 || password.length<4){
          toast.error("username and password length must be greater than 4",{position:"bottom-right"})
          return ;
        }
        if(password!==cPassword){
          toast.error("password and confirm password not matched",{position:"bottom-right"})
          return ;
        }
    const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
        const { data } = await axios.post("http://localhost:4000/signup",formData);

        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
        username: "",
        cPassword:"",
        
      });
    };
  
    return (
      <div className="login-signup-container">
      <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>

    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input">
            <input
            type="text"
            name="username"
            value={username}
            placeholder="Name"
            onChange={handleOnChange}
          />
       </div>
        

        <div className="input">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>


        <div className="input">
         <input
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>


        <div className="input">
         <input
            name="cPassword"
            value={cPassword}
            placeholder="Confirm Password"
            onChange={handleOnChange}
          />
        </div>
      </div>
       
      <div className="forgot-password">
        Already registered? <Link to={"/Login"}>Login</Link>
      </div>
      <div className="submit-container">
        <button className="submit" type='submit' >SignUp </button>
      </div>
      </form>
      <ToastContainer />
     </div>
     </div>
  );
};

export default Signup;