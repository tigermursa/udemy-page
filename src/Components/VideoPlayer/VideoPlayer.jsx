import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BsArrowLeftShort } from "react-icons/bs";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const resetSize = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`video-player-wrapper border flex justify-between ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width={isExpanded ? "80%" : "100%"}
        height={isExpanded ? "650px" : "800px"}
        controls
        className="react-player"
      />
      {isExpanded ? (
        <button className="reset-button" onClick={resetSize}>
          Expanded View
        </button>
      ) : (
        <button className="expand-button" onClick={handleExpandClick}>
          <div className=" border -right-36 top-10 absolute  flex p-2 hover:-right-3 transition-all duration-500">
            <BsArrowLeftShort className="text-3xl me-5" /> <p className="font-bold text-white pe-5">Course Content</p>  
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
