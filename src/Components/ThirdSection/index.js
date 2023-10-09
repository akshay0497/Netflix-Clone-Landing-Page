import React from "react";
import img from "../../Assets/Images/ThirdSection/ThirdSection.jpg";
import download from "../../Assets/Images/ThirdSection/download-icon.gif";
import movie from "../../Assets/Images/ThirdSection/boxshot.png";
const ThirdSection = () => {
  return (
    <>
      <div className="flex items-center justify-evenly px-14 pt-7">
        <div className="relative">
          <div className="w-[500px] h-[500px]">
            <img src={img} />
            <div className="absolute bottom-[28.5%] bg-[#000] border-gray-900 border-2 
            rounded-xl  left-[22.5%] text-white">
              <div className="flex items-center justify-between gap-2 h-24 p-5 ">
                <img src={movie} className="w-12" />
                <div>
                  <h1 className="font-semibold">Stranger Things</h1>
                  <p className="text-[#0071eb] font-semibold">Downloading...</p>
                </div>
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-justify px-20 ">
          <h1 className="text-5xl py-2 font-bold">Download your shows to watch offline</h1>
          <p className="text-3xl py-2">
            Save our favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="bg-[rgb(45,45,45)] h-2"></div>
    </>
  );
};

export default ThirdSection;
