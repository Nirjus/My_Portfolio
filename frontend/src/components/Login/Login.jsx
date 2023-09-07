import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {useDispatch, useSelector} from "react-redux"
import { login } from "../../redux/actions/user";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
   const dispatch = useDispatch();
   const alert = useAlert();
   const {loading, message, error} = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password));
  };
  
   useEffect(() => {
    if(error){
      alert.error(error);
      dispatch({type: "CLEAR_ERRORS"})
    }
    if(message){
      alert.success(message);
      dispatch({type: "CLEAR_MESSAGE"})
    }
   },[alert,error, message, dispatch])

  return (
    <div className=" w-full min-h-screen h-auto flex items-center justify-center bg-[#120b2b]">
      <div className="w-[50%] max-800px:w-[80%] rounded-md bg-[#ffffffec] shadow-lg">
        <form action="" onSubmit={submitHandler} className=" bg-inherit rounded-[5px] h-[70vh] p-[2vmax] ">
          <motion.h4 initial={{x:-500}} animate={{x:0}} transition={{duration:0.5}} className=" uppercase text-[40px] font-[600] text-center text-black tracking-widest">
           Admin panel
          </motion.h4>
          <p className=" text-center">Login here</p>
          <div className=" flex flex-col w-[60%] max-800px:w-full m-auto gap-6 translate-y-[100px]">

            <motion.input
             initial={{opacity:0, x:-600}}
             animate={{opacity:1, x:0}}
             transition={{duration:0.7, delay:0.6}}
              type="email"
              placeholder="Email.."
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className=" outline-none h-[52px] bg-[#4e5063f0] text-white rounded-lg placeholder:text-white px-4 text-[20px]"
            />
            <motion.input
             initial={{opacity:0, x:-400}}
             animate={{opacity:1, x:0}}
             transition={{duration:0.7, delay:0.6}}
              type="password"
              placeholder="Password.."
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className=" outline-none h-[52px] bg-[#4e5063f0] text-white rounded-lg placeholder:text-white px-4 text-[20px]"
            />
            <motion.div
         initial={{opacity:0, y:-800}}
         animate={{opacity:1, y:0}}
         transition={{duration:0.7, delay:0.6}}
        >
            <Button variant="contained" type="submit" disabled={loading} className=" w-full ">
              Login
            </Button>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
