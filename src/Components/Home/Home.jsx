import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import TabSection from "../TabSection/TabSection";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <VideoPlayer />
      <TabSection />
    </div>
  );
};

export default Home;
