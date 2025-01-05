import React from "react";

function BackgroundCircles() {
  return (
    <div className="absolute flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping"></div>
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px]"></div>
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]"></div>
      <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] animate-pulse"></div>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px]"></div>
    </div>
  );
}

export default BackgroundCircles;
