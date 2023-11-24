import React from "react";
import { motion } from "framer-motion";

const AchivementCard = ({ url, imgSrc, title, isAdmin = false }) => {
   
  return (
    <motion.div
    initial={{x:400,opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{type:"spring",duration:2, delay:0.4}}>
      <div  className=" w-[280px] transition-all  duration-300 m-4 flex flex-col hover:scale-110 hover:shadow-xl rounded-lg hover:bg-[#7575762c] max-800px:w-[200px]">
      <a
        href={url}
        target="blank"
        className=" no-underline text-center cursor-pointer"
      >
        <img
          src={imgSrc}
          alt={title}
          className=" border-t-[6px]  border-[#717171] bg-transparent object-contain overflow-y-hidden w-full h-[250px] max-800px:h-[200px] rounded-lg"
        />
        <p className=" absolute translate-y-[-120px] h-[120px] w-[280px] bg-[#a3a3a3df] max-800px:h-[80px] max-800px:translate-y-[-80px] text-blue-950 font-extrabold max-800px:w-[200px] max-800px:text-[20px] rounded-b-lg pt-7 text-[25px] max-800px:p-3">
          {title}
        </p>
      </a>
     
      </div>
    </motion.div>
  );
};

export default AchivementCard;
