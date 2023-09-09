import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject, deleteProject, getUser } from '../../redux/actions/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import { useAlert } from 'react-alert';
import { FaTrash } from 'react-icons/fa';

const Projects = () => {

    const {message, error, loading} = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);
    
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const alert = useAlert();
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [technology, setTechnology] = useState("");
    const [image, setImage] = useState("");
     
    const submitHandler = async (e) => {
        e.preventDefault();
       await dispatch(addProject(url, title, image, description, technology));
          dispatch(getUser());
    }
     const deleteHandler = async (id) => {
   await dispatch(deleteProject(id));
    dispatch(getUser());
  };

    const handleProjectImage = (e) => {
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
       
      }, [alert, message, dispatch,  error, loginMessage]);
    

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

            <p className=" text-[20px]">PROJECTS</p>
            <div className=" bg-emerald-300 rounded-lg flex flex-col p-4 justify-center  items-center gap-8">
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
                type="text"
                placeholder="Link"
                value={url}
                onChange={(e) => setUrl( e.target.value )}
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0]  rounded-lg placeholder:text-[#2a2a2a] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Technologies use this project.."
                value={technology}
               
                onChange={(e) =>setTechnology(e.target.value)}
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0] rounded-lg placeholder:text-[#323232] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="file"
                accept="image/*"
                onChange={handleProjectImage}
                className=" bg-[#e4e400] text-black rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#90a000] border-none"
              />
            </div>
            <div className="flex justify-between gap-2 mx-auto max-1000px:flex-col">
              <Link
                to={"/admin"}
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
                style={{
                    backgroundColor:"rgb(110 231 183)"
                }}
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
       user.projects &&
       user.projects.map((i) => (

        <div key={i._id} className=' bg-white m-2 text-center rounded w-[300px] min-h-[150px] h-auto'>
          <h6>{i.title}</h6>
          <Typography variant="body1" fontSize={10} style={{letterSpacing:"2px", padding:"5px"}}>
            {i.description}
          </Typography>
          <Typography variant="body1" style={{fontWeight:600}}>
            {i.url}
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

export default Projects