import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsSearch } from "react-icons/bs";
import Accordion from "./Accordion/Accordion";
import AboutCourse from "./AboutCourse/AboutCourse";
import Note from "./Note/Note";
import Announcements from "./Announcements/Announcements";
import Review from "./Review/Review";
import Tools from "./Tools/Tools";
const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="mt-6 bg-white  mb-56">
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList className={" mb-10 "}>
          <Tab>
            <BsSearch />
          </Tab>
          <Tab>Course Content</Tab>
          <Tab>Overview</Tab>
          <Tab>Notes</Tab>
          <Tab>Announcement</Tab>
          <Tab>Review</Tab>
          <Tab>Learning Tools</Tab>
        </TabList>

        <TabPanel>
          {/* Add your search content here */}
          <div className="h-80">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder=" Search Course Content"
                className=" bg-white border border-black w-5/12 ps-10"
              />
              <BsSearch className="bg-black text-5xl p-3 font-bold" />
            </div>
            <div className="text-black mt-16">
              <h3 className=" text-2xl font-bold">Start a new search</h3>
              <p>To find captions, lectures or resources</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <Accordion />
        </TabPanel>
        <TabPanel>
          <AboutCourse />
          {/* Add your overview content here */}
        </TabPanel>
        <TabPanel>
          <Note />
          {/* Add your notes content here */}
        </TabPanel>
        <TabPanel>
          <Announcements />
          {/* Add your announcement content here */}
        </TabPanel>
        <TabPanel>
          <Review />
          {/* Add your review content here */}
        </TabPanel>
        <TabPanel>
          <Tools />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
