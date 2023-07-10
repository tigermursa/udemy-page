import React from "react";
import CourseContent from "../../CourseContent/CourseContent";

const Accordion = () => {
  return (
    <div className="flex justify-center pb-96">
      <div className=" h-96 w-6/12">
        <div className="collapse collapse-arrow bg-purple-50 border border-black">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-lg text-black font-medium">
            <p> Section1 : Learn Python From the scratch</p>
            <p className="text-xs">0/20 | 1hr 19min</p>
          </div>
          <div className="collapse-content flex bg-transparent">
            <div></div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-purple-50 border border-black ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg text-black font-medium">
            <p> Section2 : Python Coding Project -Web App Discovery</p>
          </div>
          <div className="collapse-content text-black">
            <p className="text-xs font-bold">hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
