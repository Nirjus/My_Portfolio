import React from 'react'
import { BallCanvas } from '../canvas';

const SkillBolls = ({skills}) => {
  return (
    <div className=' flex flex-wrap 1000px:p-[100px] justify-center items-center gap-12'>
       
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image1.url} />
            </div>
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image2.url} />
            </div>
            <div className='w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image3.url} />
            </div>
            <div className='w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image4.url} />
            </div>
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image5.url} />
            </div>
            <div className='w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image6.url} />
            </div>
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image7.url} />
            </div>
            <div className='w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image8.url} />
            </div>
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image9.url} />
            </div>
            <div className=' w-[100px] h-[100px]'>
               <BallCanvas icon={skills.image10.url} />
            </div>
    </div>
  )
}

export default SkillBolls