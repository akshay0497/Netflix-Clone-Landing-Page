import React, { useState } from "react";
import tv from "../../Assets/Images/SecondSection/tv.png";
import axios from "axios";


const SecondSection = () => {
 
  return (
    <>
      <div className="bg-[rgb(45,45,45)] h-2"></div>
      <div className="flex items-center  justify-evenly px-14 ">
        <div className="text-white text-justify px-20 ">
          <h1 className="text-5xl  py-2 font-bold">Enjoy on your TV</h1>
          <p className="text-3xl p-2">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative">
          <div className="w-[500px] h-[500px]">
            <img src={tv} />
          </div>
          <div className="absolute top-[72px] right-14 z-[-1] overflow-hidden">
            <video width={360} autoPlay={true} playsInline={true} loop={true} controls={true}>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(45,45,45)] h-2"></div>
    </>
  );
};

export default SecondSection;
