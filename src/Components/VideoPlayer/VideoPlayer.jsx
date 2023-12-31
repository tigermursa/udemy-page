import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BsArrowLeftShort, BsFillArrowRightSquareFill } from "react-icons/bs";
import "./VideoPlayer.css";
import CourseContent from "../CourseContent/CourseContent";
import { AiOutlineDoubleRight } from "react-icons/ai";

const VideoPlayer = () => {
    // expand state
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const resetSize = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`video-player-wrapper  flex justify-between ${isExpanded ? "expanded" : ""}`}>
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width={isExpanded ? "80%" : "100%"}
        height={isExpanded ? "650px" : "740px"}
        controls
        className="react-player"
      />
      {isExpanded ? (
        <button className="reset-button" onClick={resetSize}>
          <AiOutlineDoubleRight className="absolute right-96 me-5 font-extrabold text-4xl" />
        </button>
      ) : (
        <button className="expand-button hidden md:block" onClick={handleExpandClick}>
          <div className=" border -right-36 top-10 absolute  flex p-2 hover:-right-3 transition-all duration-500">
            <BsArrowLeftShort className="text-3xl me-5" />{" "}
            <p className="font-bold text-white pe-5">Course Content</p>
          </div>
        </button>
      )}
{/* course content list  */}
      {isExpanded && (
        <div className="absolute right-0 hidden md:block">
          <CourseContent />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
