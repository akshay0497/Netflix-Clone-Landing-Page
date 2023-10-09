import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";


const FirstSection = () => {
  return (
    <div  >
      <div className="flex flex-col items-center justify-center text-center text-white gap-20 lg:py-[105px] lg:px-20 ">
        <div>
          <h1 className="font-bold text-5xl px-14 py-3">
            Enjoy big movies, hit series and more from ₹149.
          </h1>
          <p className="text-2xl py-2">Join today. Cancel anytime.</p>
          <p className="text-2xl pt-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-between">
          <input
            className="p-2 bg-[#00000080] w-[400px] h-14 text-white font-semibold rounded"
            type="email"
            name="email"
            id="email"
            aria-label="Email address"
            placeholder="Email address"
          />
          <button className="bg-[#E50914] text-white text-3xl font-semibold rounded p-2 h-fit w-fit" >
            Get Started <ArrowForwardIosOutlinedIcon className="pb-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
