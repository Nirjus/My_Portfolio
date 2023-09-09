import React from 'react'
import {Tilt} from "react-tilt"
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import img1 from "../../assets/images/backend developer.png";
import img2 from "../../assets/images/frontend developer.png";
import img3 from "../../assets/images/full satck developer.png";


const About = ({about}) => {

   const ServiceCard = ({ title, icon}) => {
     return(
       <Tilt className={" sm:w-[250px] w-[90%]"}>
         <motion.div
         initial={{opacity:0,scale:0.5}}
         animate={{opacity:1, scale:1}}
         transition={{ duration: 1, delay: 0.4 }}
         whileTap={{scale:0.7}}
          className=' w-full p-[1px] rounded-[20px] shadow-2xl bg-gradient-to-tr from-cyan-400 to-red-700 '
         >
            <div
             className=' bg-[#4c32b7] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'>
               <img src={icon} alt={title}  className=' w-24 h-24 object-contain'/>
               <h3 className=' text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
         </motion.div>
       </Tilt>
     )
   }

  return (
   <div className=" w-full min-h-screen h-auto mx-auto p-4 bg-[#2a1250] flex justify-evenly max-800px:flex-col">
    <div className=" m-auto flex flex-col gap-10">
    <motion.div 
     initial={{y:-50,opacity: 0}}
     animate={{y:0, opacity:1, transition:{type:"spring",duration:1.25, delay:0.5}}}
    className=''>

        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>{about.subtitle}</h2>
    </motion.div>

    <motion.p
    initial={{x:100 ,opacity:0}}
    animate={{x:0, opacity:1}}
    className=' mt-4 text-white text-[17px] max-w-3xl leading-[30px]' >
    {about.description}
    </motion.p>
   <div className=" flex flex-wrap gap-10 max-800px:mx-4 justify-center sm:justify-start mb-10">
    
        <ServiceCard title={"Back-end Developer"} icon={img1} />
        <ServiceCard title={"Front-end Developer"} icon={img2} />
        <ServiceCard title={"MERN Developer"} icon={img3}/>
    
   </div>
    </div>
    <motion.div 
     initial={{x:-1000, opacity:0, rotateZ:0}}
     animate={{x:0,  opacity:1, rotateZ:-360}}
     transition={{duration:2, delay:0.5}}
    className="relative bg-[#f6f0ffe6] h-[500px] w-[500px] max-800px:w-fit max-800px:h-[300px] rounded-lg m-auto overflow-hidden group">
  <img src={about.avatar.url} className="object-cover w-full h-full rounded-lg transition-opacity duration-300 group-hover:opacity-70" alt="pic" />
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#ffffff47] backdrop-blur-md transform transition translate-y-full opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    <h2 className="text-[25px] font-bold text-[#252525] my-1 text-center">{about.name}</h2>
    <p className="text-gray-800 text-center">{about.title}</p>
    <p className="text-gray-800 text-center"><a href="https://www.linkedin.com/in/nirjus-karmakar-b2bb0b26b/" target="blank">contact me</a></p>
  </div>
</motion.div>

   </div>
  )
}

export default About