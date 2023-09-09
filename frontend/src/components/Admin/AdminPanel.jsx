import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdTimeline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../redux/actions/user";
import { useAlert } from "react-alert";


const AdminPanel = () => {
  const dispatch = useDispatch();
  const alert = useAlert();


  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, loading } = useSelector((state) => state.update);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));
    console.log(name, email, password, skills, about);
  };
  const handleImage = (e, val) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val === 1) {
          setSkills({...skills,  image1: Reader.result });
        }
        if (val === 2) {
          setSkills({...skills,  image2: Reader.result });
        }
        if (val === 3) {
          setSkills({...skills,  image3: Reader.result });
        }
        if (val === 4) {
          setSkills({...skills,  image4: Reader.result });
        }
        if (val === 5) {
          setSkills({...skills,  image5: Reader.result });
        }
        if (val === 6) {
          setSkills({...skills,  image6: Reader.result });
        }
        if (val === 7) {
          setSkills({...skills,  image7: Reader.result });
        }
        if (val === 8) {
          setSkills({...skills,  image8: Reader.result });
        }
        if (val === 9) {
          setSkills({...skills,  image9: Reader.result });
        }
        if (val === 10) {
          setSkills({...skills,  image10: Reader.result });
        }
      }
    };
  };
  const handleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({...about,  avatar: Reader.result });
      }
    };
  };
  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload(true);
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
  }, [alert, message, dispatch, loginMessage, error]);

  return (
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
            <motion.input
              initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              type="name"
              placeholder="Name.."
              value={name}
             
              onChange={(e) => setName(e.target.value)}
              className=" outline-none h-[52px] bg-[#8689a3f0] text-white rounded-lg placeholder:text-white px-4 text-[20px]"
            />
            <motion.input
              initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              type="email"
              placeholder="Email.."
              value={email}
             
              onChange={(e) => setEmail(e.target.value)}
              className=" outline-none h-[52px] bg-[#8689a3f0] text-white rounded-lg placeholder:text-white px-4 text-[20px]"
            />
            <motion.input
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              type="password"
              placeholder="Password.."
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
              className=" outline-none h-[52px] bg-[#8689a3f0] text-white rounded-lg placeholder:text-white px-4 text-[20px]"
            />
            <p className=" font-bold">Skill Container</p>
            <div className=" bg-green-200 w-full flex-col rounded-lg flex p-2  items-center gap-8">
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 1</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 1)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 2</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 2)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 3</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 3)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className="">Skill 4</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 4)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 5</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 5)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                {" "}
                <p className=" ">Skill 6</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 6)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 7</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 7)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className="">Skill 8</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 8)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly gap-3">
                <p className=" ">Skill 9</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 9)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
              <div className="flex items-center justify-evenly  gap-3">
                <p className="">Skill 10</p>
                <motion.input
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e, 10)}
                  className=" bg-[#27ff06] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#088402] border-none"
                />
              </div>
            </div>

            <p className=" text-[20px]">About container</p>
            <div className=" bg-sky-300 rounded-lg flex flex-col p-4 justify-center  items-center gap-8">
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Name.."
                value={about.name}
                
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0]  rounded-lg placeholder:text-[#2a2a2a] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Tittle.."
                value={about.title}
               
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className=" outline-none h-[52px] w-full bg-[#e5e5ebf0]  rounded-lg placeholder:text-[#313131] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Subtitle.."
                value={about.subtitle}
                
                onChange={(e) =>
                  setAbout({ ...about, subtitle: e.target.value })
                }
                className=" outline-none h-[52px] w-full bg-[#f3f3f6f0]  rounded-lg placeholder:text-[#2b2b2b] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="text"
                placeholder="Description.."
                value={about.description}
               
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className=" outline-none h-[52px] w-full bg-[#ecedf3f0] rounded-lg placeholder:text-[#323232] px-4 text-[20px]"
              />
              <motion.input
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                type="file"
                accept="image/*"
                onChange={handleAboutImage}
                placeholder="Choose Avatar"
                className=" bg-[#3406ff] text-white rounded-[30px] cursor-pointer p-[1vmax] active:bg-[#021152] border-none"
              />
            </div>
            <div className="flex justify-between gap-2 mx-auto max-1000px:flex-col">
              <Link
                to={"/admin/timeline"}
                className=" flex gap-4 items-center justify-center border border-neutral-700 p-2 hover:scale-105 hover:bg-slate-200 duration-700"
              >
                TIMELINE <MdTimeline />
              </Link>
              <Link
                to={"/admin/achivements"}
                className=" flex gap-4 items-center justify-center border border-neutral-700 p-2 hover:scale-105 hover:bg-slate-200 duration-700"
              >
                ACHIVEMENTS <FaAcquisitionsIncorporated />
              </Link>
              <Link
                to={"/admin/projects"}
                className=" flex gap-4 items-center justify-center border border-neutral-700 p-2 hover:scale-105 hover:bg-slate-200 duration-700"
              >
                PROJECTS <AiOutlineProject />
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
                Update
              </Button>
            </motion.div>
          </div>
        </form>
        <div className="flex justify-center m-4">
          <Button
            variant="contained"
            color="error"
            onClick={logoutHandler}
            className="w-[50%] max-800px:w-[80%]"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
