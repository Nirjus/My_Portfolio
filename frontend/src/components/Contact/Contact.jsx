import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { contactUs } from "../../redux/actions/user";
import { EarthCanvas } from "../canvas";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
const dispatch = useDispatch();
const alert = useAlert();

   const {loading, error, message: alertMessage} = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
   e.preventDefault();
   dispatch(contactUs(name, email, message));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
   
   
  }, [alert, alertMessage, dispatch,  error]);

  return (
     
    <div className=" w-full min-h-screen h-auto flex max-800px:flex-col-reverse items-center justify-around bg-transparent overflow-hidden p-3">
     
      <motion.div 
      initial={{opacity:0 }}
      animate={{opacity:1}}
      transition={{duration:0.7, type:"tween", delay:0.3}}
      className=" w-[40%] flex justify-center h-[80vh]  items-center bg-[#1e2d3879] rounded-l-[200px] max-1000px:w-[90%] ">
        <form action="" onSubmit={contactFormHandler} className=" flex max-sm:w-[80%] flex-col gap-5 ">
          <h4 className=" text-center text-[50px] text-white font-[800] uppercase tracking-wider max-sm:text-[30px]">Contact Us</h4>
          <motion.input
          initial={{opacity:0, x:-700}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.7, delay:0.6}}
            type="text"
            placeholder="Name.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" outline-none  p-3 rounded-md font-bold text-[#fff] text-[19px] placeholder:text-white bg-[#42587232]"
          />
          <motion.input
          initial={{opacity:0, x:-600}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.7, delay:0.6}}
            type="email"
            placeholder="Email.."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" outline-none  p-3 rounded-md font-bold text-white placeholder:text-white text-[19px] bg-[#42587232]"
          />
          <motion.textarea
          initial={{opacity:0, x:-500}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.7, delay:0.6}}
            placeholder="Message.."
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" outline-none  p-3 rounded-md font-bold text-white placeholder:text-white text-[19px] bg-[#42587232]"
          ></motion.textarea>
         <motion.div
         initial={{opacity:0, y:-800}}
         animate={{opacity:1, y:0}}
         transition={{duration:0.7, delay:0.6}}
         className=" 800px:w-full flex justify-end">
         <Button variant="contained" type="submit" disabled={loading} className=" 800px:w-full">
            Send
          </Button>
         </motion.div>
        </form>
      </motion.div>
      <motion.div 
      initial={{opacity:0, y:-500}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.7, delay:0.3}}
      className=" w-[50%] h-[100vh] max-800px:w-full max-800px:h-[50vh]">
         <EarthCanvas />
      </motion.div>
    </div>
  
  );
};

export default Contact;
