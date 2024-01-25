import React from "react";
import Arrow from "./icons/Arrow.jsx";
import ToggleButton from "./ToggleButton.jsx";
import Assets from "./asset/Emoji.png";
import Line from "./icons/Line.jsx";
import "./style/Hero.css";

function Hero() {
  return (
    <>
      {/* line 1 */}
      <div className=" flex items-center justify-center mt-16 font-bold">
        <h3 className="tracking-tight text-8xl">bring</h3>
        <div className="ml-5">
          <Arrow></Arrow>
        </div>
        <div className="toggleClick">
          <ToggleButton></ToggleButton>
        </div>
        <div className="emoji-svg p-2 ml-2 rounded-full shadow-xl bg-[#ffffff]">
          <img src={Assets} alt="" width={87} />
        </div>
      </div>
      {/* line 2 */}
      <div className="line-2 flex items-center justify-center mt-3">
        <div class="w-28 yellow-circle h-28 bg-[#ffc74b] flex items-center justify-center rounded-full">
          <div className="p-1 rounded-full bg-white shadow-2xl">
            <div className="p-2 bg-[#4c8ef6] shadow-xl shadow-black rounded-full"></div>
          </div>
        </div>
        <div className="glashmorpishm p-7 bg-transparent rounded-full -ml-10">
          <Line></Line>
        </div>
        <div><h3 className="text-8xl font-bold -ml-6 tracking-tight">a team</h3></div>
      </div>
    </>
  );
}

export default Hero;
