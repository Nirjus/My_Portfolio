import React from 'react'
import Lottie from "lottie-react";
import animationLoader from "../../assets/animation/animation_ln3jazhd.json";

const Loading = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-[#1f0c33]">
              <Lottie animationData={animationLoader}  className=' w-full h-screen' />
    </div>
  )
}

export default Loading