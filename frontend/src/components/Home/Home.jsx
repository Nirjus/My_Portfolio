import React from "react";
import "./home.css";
import {HashLink} from "react-router-hash-link"
import TimeLine from "../../TimeLine/TimeLine";
import SkillBolls from "../SkillBoll/SkillBolls.jsx";
import { motion } from "framer-motion";
import { ComputersCanvas, StarsCanvas } from "../canvas";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import AchivementCard from "../AchivementCard/AchivementCard";
import myImg from "../../assets/images/my pic.png";
const Home = ({ timeline, achivements, skills }) => {
  return (
    <div className="home">
      <div className=" top-0 z-[20] sticky">
      <div className=" w-full h-[40px] flex justify-end px-[20px] max-800px:justify-center items-center flex-row gap-10 text-[cyan] bg-gradient-to-l from-[#ffffff3e] to-[#ffffff14]  font-bold absolute top-0  z-10">
        <HashLink to={"/#timeline"} className=" hover:text-[#27baf9] duration-300">Timeline</HashLink>
        <HashLink to={"/#skills"}  className=" hover:text-[#27baf9] duration-300">Skills</HashLink>
        <HashLink to={"/#achivements"}  className=" hover:text-[#27baf9] duration-300">Achivements</HashLink>
        </div>
      </div>
      <section className=" homeCanvas w-full h-[120vh] mx-auto ">
     
        <div
          className={` absolute inset-0 top-[80px] max-w-7xl  mx-auto  flex flex-row items-start gap-5 ${styles.paddingX}`}
        >
         
          <div className=" flex-col justify-center items-center mt-5 flex">
            <div className=" w-5 h-5 rounded-full bg-[#9768f7]" />
            <div
              className=" w-1 sm:h-80 h-40"
              style={{
                backgroundImage: "linear-gradient(180deg,#9768f7,#11022e)",
              }}
            />
          </div>
          <div>
            <h1 className={` text-white ${styles.heroHeadText}`}>
              Hi I'm <span className=" text-[#675bef]">Nirjus</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>
              I developed full stack modern <br className=" sm:block hidden" />{" "}
              web application.
            </p>
          </div>
         
        </div>
        <div className=" w-full h-full max-800px:hidden">
       <ComputersCanvas />
       </div>
       <div className=" w-full h-[500px] 800px:hidden absolute top-[300px]">
        <img src={myImg} alt="" className=" w-[500px]  object-contain rounded-[50%] grayscale "/>
       </div>
        <div className=" absolute bottom-1 w-full flex justify-center items-center">
          <Link to={"/about"}>
            <div className=" w-[25px] h-[50px] rounded-3xl border-2 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className=" w-2 h-2 rounded-full bg-white mb-1"
              ></motion.div>
            </div>
          </Link>
        </div>
      </section>
      <div className="homeContainer" id="timeline">
        <motion.h3
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just", duration: 1, delay: 0.3 }}
          className={`${styles.heroHeadText} !text-white text-center`}
        >
          TIMELINE
        </motion.h3>
        <TimeLine timeLine={timeline} />
      </div>

      <div className="homeSkills w-full min-h-[140vh] px-10 py-10 max-800px:bg-[#060310b5]"  id="skills" >
       <div className=" max-800px:hidden">
       <StarsCanvas />
       </div>
        <motion.h2
          initial={{ x: -170, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "just" }}
          className={`${styles.heroHeadText} text-white text-center`}
  
        >
          SKILLS
        </motion.h2>

        <SkillBolls skills={skills} />
      </div>
      <div className="homeachivement w-full min-h-screen h-auto p-2 " id="achivements">
        <motion.h3
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just", duration: 1, delay: 0.3 }}
          className={`${styles.heroHeadText} !text-white text-center my-14 pt-10`}
        >
          ACHIVEMENTS.
        </motion.h3>

        <div className=" flex flex-wrap w-[85%] justify-evenly m-auto">
          {achivements.map((i) => (
            <AchivementCard
              key={i._id}
              imgSrc={i.image.url}
              title={i.title}
              url={i.url}
              id={i._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
