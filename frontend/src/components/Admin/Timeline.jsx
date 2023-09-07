import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTimeline, deleteTimeline, getUser } from '../../redux/actions/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { useAlert } from 'react-alert';
const Timeline = () => {

    const {message, error, loading} = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const alert = useAlert();
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [company, setCompany] = useState("");
    const [image, setImage] = useState("");
     
    const submitHandler = async (e) => {
        e.preventDefault();
      await dispatch(addTimeline(title, description,date,company,image));
      dispatch(getUser());
    }

    const deleteHandler = async (id) => {
     await  dispatch(deleteTimeline(id));
          dispatch(getUser());
    }

    const handleTimelineImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
    
        Reader.readAsDataURL(file);
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setImage(Reader.result);
          }
        };
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
          alert.success(message);
          dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (loginMessage) {
          alert.success(loginMessage);
          dispatch({ type: "CLEAR_MESSAGE" });
        }
      }, [alert,loginMessage,message, dispatch,  error]);
    

  return (
    <>
    <div className=" w-full min-h-screen h-auto flex items-center justify-center bg-[#6a50c7]">
      <div className="w-[50%] max-800px:w-[80%] rounded-md bg-[#ffffffec] shadow-2xl my-2">
        <motion.h4
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" uppercase text-[40px] font-[600] text-center text-black tracking-widest"
        >
          Admin panel
        </motion.h4>

        <form
          action=""
          onSubmit={submitHandler}
          className=" bg-inherit rounded-[5px] min-h-[70vh] h-auto p-[2vmax] "
        >
          <div className=" flex flex-col w-[60%] max-1000px:w-full m-auto gap-6 ">

            <p className=" text-[20px]">TIMELINE</p>
            <div className=" bg-sky-300 rounded-lg flex flex-col p-4 justify-center  items-center gap-8">
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Title.."
                value={title}
                
                onChange={(e) => setTitle( e.target.value )}
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0]  rounded-lg placeholder:text-[#2a2a2a] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Description.."
                value={description}
               
                onChange={(e) => setDescription( e.target.value )}
                className=" outline-none h-[52px] w-full bg-[#e5e5ebf0]  rounded-lg placeholder:text-[#313131] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="date"
                placeholder="Date.."
                value={date}
                
                onChange={(e) => setDate(e.target.value)}
                className=" outline-none h-[52px] w-full bg-[#f3f3f6f0]  rounded-lg placeholder:text-[#2b2b2b] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Company Name.."
                value={company}
               
                onChange={(e) =>setCompany(e.target.value)}
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0] rounded-lg placeholder:text-[#323232] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="file"
                accept="image/*"
                onChange={handleTimelineImage}
                className=" bg-[#3406ff] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#021152] border-none"
              />
            </div>
            <div className="flex justify-between gap-2 mx-auto max-1000px:flex-col">
              <Link
                to={"/Account"}
                className=" flex gap-4 items-center justify-center border border-neutral-700 p-2 hover:scale-105 hover:bg-slate-200 duration-700"
              >
                BACK <MdKeyboardBackspace />
              </Link>
             
            </div>
            <motion.div
              initial={{ opacity: 0, y: -800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                variant="contained"
                type="submit"
                className=" w-full "
                disabled={loading}
              >
                Add
              </Button>
            </motion.div>
          </div>
        </form>
       
      </div>
    </div>
     <div className="w-full h-full flex justify-evenly items-center flex-wrap bg-[#6a50c7]">
     {user &&
       user.timeline &&
       user.timeline.map((i) => (
         <div key={i._id} className=' bg-white m-2 text-center rounded w-[300px] min-h-[150px] h-auto'>
          <h6>{i.title}</h6>
          <Typography variant="body1" fontSize={10} style={{letterSpacing:"2px", padding:"5px"}}>
            {i.description}
          </Typography>
          <Typography variant="body1" style={{fontWeight:600}}>
            {i.date.toString().split("T")[0]}
          </Typography>
          <Button style={{
            margin:"auto",
            display:"block",
            color:"darkorange",
          }}
          onClick={() => deleteHandler(i._id)}
          >
            <FaTrash size={30} />
          </Button>
        </div>
       ))}
   </div>
   </>
  )
}

export default Timeline