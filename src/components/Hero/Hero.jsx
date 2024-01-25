import React from "react";
import Arrow from "./icons/Arrow.jsx";
import ToggleButton from "./hooks/ToggleButton.jsx";
import Assets from "./asset/Emoji.png";
import Line from "./icons/Line.jsx";
import Line2 from "./icons/Line2.jsx";
import CircleGreen from "./icons/GreenCircle.jsx";
import SmallCircle from "./icons/SmallCircle.jsx";
import Infinity from "./icons/infinity.jsx";
import GreenStar from "./icons/GreenStar.jsx";
import YellowStar from "./icons/YellowStar.jsx";
import BlueStar from "./icons/BlueStar.jsx";
import SkyStar from "./icons/SkyStar.jsx";
// CSS
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
      <div className="line-2 flex items-center justify-center">
        <div class="w-28 yellow-circle h-28 bg-[#ffc74b] flex items-center justify-center rounded-full">
          <div className="p-1 rounded-full bg-white shadow-2xl">
            <div className="p-2 bg-[#4c8ef6] shadow-xl shadow-black rounded-full"></div>
          </div>
        </div>
        <div className="glashmorpishm p-7 bg-transparent rounded-full -ml-10">
          <Line></Line>
        </div>
        <div>
          <h3 className="text-8xl font-bold -ml-6 tracking-tight">a team</h3>
        </div>
        <div className="flex items-center">
          <div className="toggle-button flex items-center p-3 mt-3 ml-5 border-[6px] border-black rounded-full px-20">
            <div className="-ml-12">
              <Line2></Line2>
            </div>
            <div className="-ml-[78px]">
              <CircleGreen></CircleGreen>
            </div>
          </div>
          <div className="smallCircle-blue-white mt-2 -ml-4">
            <SmallCircle></SmallCircle>
          </div>
        </div>
      </div>
      {/* line 3 */}
      <div className="line-3 flex items-center justify-center">
        <div class="w-28 gradient-purle-pink-circle h-28 bg-gradient-to-l from-[#7955f2] to-[#dd7c9c] flex items-center justify-center rounded-full"></div>
        <div className="glashmorpishm-2-circle-z-index-1 py-2 flex items-center px-1 -ml-24 justify-start">
          <div className="ClassName p-4 px-5 flex items-center bg-white rounded-full">
            <Infinity></Infinity>
          </div>
        </div>
        <div class="w-28 gradient-purle-pink-circle h-28 -ml-24 bg-[#91cbff] border-1 shadow-md flex items-center justify-center rounded-full"></div>
        <div>
          <h3 className="text-8xl font-bold ml-2 tracking-tight">together</h3>
        </div>
      </div>

      <div>
        <div className="description-and-button flex justify-center w-[800px] mx-auto items-center mt-16">
          <div className="star-svg -mt-20">
            <GreenStar></GreenStar>
          </div>
          <p className="xl:w-1/2 mx-auto text-center font-medium leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis corrupti veniam quibusdam non. Assumenda? 🙌</p>
          <div className="star-svg">
            <YellowStar></YellowStar>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="button py-4 hover:scale-95 duration-300 rounded-full px-6  text-center bg-[#1c1e28] ">
            <a className="text-gray-100 text-[13px] tracking-wide font-semibold" href="#">
              Try it for free
            </a>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button className="hover:scale-95 duration-300">
            <a className="text-gray-800 font-semibold hover:underline duration-300" href="#">
              See how it work
            </a>
          </button>
        </div>
      </div>
      <div className="star-svg">
        <div className="flex justify-around">
          <div className="-mt-10">
            <BlueStar></BlueStar>
          </div>
          <div className="-mt-16">
            <SkyStar></SkyStar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
