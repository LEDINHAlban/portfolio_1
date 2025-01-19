import CardExperience from "./CardExperience";
import React from "react";

function WorkExperience() {
  return (
    <div className="h-screen grayBackground">
      <div className="flex justify-center items-center">
        <p className="pageTitle mt-12">Experience</p>
      </div>

      {/* list of cards */}
      <div className="flex space-x-4 h-screen justify-center items-center">
        <CardExperience />
      </div>
    </div>
  );
}

export default WorkExperience;
