import React from "react";
import MyJournal from "../components/dash-section/MyJournal";
import History from "../components/dash-section/History";

const Journal = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:max-w-[75%]">
        <MyJournal />
      </div>

      <History />
    </div>
  );
};

export default Journal;
