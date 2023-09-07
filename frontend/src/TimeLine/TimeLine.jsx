import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = ({ timeLine = [] }) => {
  const ExperienceCard = ({ title, date, imgSrc, comapany,experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={date.toString().split("T")[0]}
        iconStyle={{ background: "#fff" }}
        icon={
          <div className=" flex justify-center items-center w-full h-full">
            <img src={imgSrc} className=" w-[60%] h-[60%] object-contain" alt={title}/>
          </div>
        }
      >
        <div>
          <h3 className=" text-white text-[24px] font-bold">{title}</h3>
          <p
            className=" text-white text-[16px] font-semibold "
            style={{ margin: 0 }}
          >
            {comapany}
          </p>
        </div>
        <ul className=" mt-5 list-disc ml-5 space-y-2">
           {
            experience.map((i) =>(
              <li key={i} className=" text-white text-[14px] pl-1 tracking-wider">{i}</li>
            ))
           }
        
        </ul>
      </VerticalTimelineElement>
    );
  };
  return (
    <div className=" mt-20 flex flex-col">
      <VerticalTimeline>
        {timeLine.map((i) => (
          <ExperienceCard
            key={i._id}
            date={i.date}
            imgSrc={i.image.url}
            title={i.title}
            comapany={i.company}
            experience={i.description}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
