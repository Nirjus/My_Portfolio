import React from "react";
import {  AiFillProject } from "react-icons/ai";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technology,
  isAdmin = false,
  id,
  isEven,
  isMobile,
}) => {


  return (
    <>
      {isMobile ? (
        <Tilt>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -1000 : 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className=" bg-slate-400 w-[300px] h-max m-6  p-1 rounded-lg"
          >
            <a href={url} target="blank">
              <div className=" flex flex-col items-center">
                <img
                  src={projectImage}
                  alt={projectTitle}
                  className=" object-cover w-full h-[200px] rounded"
                />
                <h2 className=" text-center text-[20px] text-[#000] tracking-wide">
                  {projectTitle}
                </h2>
              </div>
              <div className=" bg-slate-600 rounded-lg p-1">
                <h4 className=" text-[#c1c1c1]">
                  <span className=" font-bold text-white text-[15px]">
                    About Project
                  </span>{" "}
                  :{description}
                </h4>
                <p className=" text-[#c1c1c1]">
                  <span className=" text-white font-bold text-[15px]">
                    Tech stack:{" "}
                  </span>{" "}
                  {technology}
                </p>
              </div>
            </a>
           
          </motion.div>
        </Tilt>
      ) : (
        <Tilt>
          <motion.div
            initial={{ opacity: 0, y: isEven ? -1000 : 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className=" bg-slate-400 w-[300px] h-max m-[50px] p-1 rounded-lg"
          >
            <a href={url} target="blank">
              <div className=" flex flex-col items-center">
                <img
                  src={projectImage}
                  alt={projectTitle}
                  className=" object-cover w-full h-[200px] rounded"
                />
                <h2 className=" text-center text-[20px] text-[#000] tracking-wide">
                  {projectTitle}
                </h2>
              </div>
              <div className=" bg-slate-600 rounded-lg p-1">
                <h4 className=" text-[#c1c1c1]">
                  <span className=" font-bold text-white text-[15px]">
                    About Project
                  </span>{" "}
                  :{description}
                </h4>
                <p className=" text-[#c1c1c1]">
                  <span className=" text-white font-bold text-[15px]">
                    Tech stack:{" "}
                  </span>{" "}
                  {technology}
                </p>
              </div>
            </a>
           
          </motion.div>
        </Tilt>
      )}
    </>
  );
};

const Project = ({ projects }) => {
  const isMobile = window.innerWidth <= 600;
  return (
    <div className="w-full min-h-screen h-auto bg-[#201344]">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={
          " text-center flex justify-center items-center text-[50px] tracking-wider uppercase text-white font-bold p-6 max-800px:text-[40px] max-600px:text-[30px] max-600px:p-4"
        }
      >
        Projects
        <AiFillProject />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center p-2 items-center gap-3 min-h-screen h-auto bg-[#c72a51] pt-[40px] rounded-t-[240px]"
      >
        {projects.map((i) => (
          <ProjectCard
            key={i._id}
            id={i._id}
            url={i.url}
            projectImage={i.image.url}
            projectTitle={i.title}
            description={i.description}
            technology={i.technology}
            isEven={i % 2 === 0}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
