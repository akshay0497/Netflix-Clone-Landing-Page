import React from "react";
import kids from "../../Assets/Images/FifthSection/kids.png";
const FifthSection = () => {
  return (
    <>
      <div className="flex items-center justify-evenly gap-2 p-20 ">
        <div className="w-full">
          <img src={kids} />
        </div>
        <div className="text-white text-justify p-10 ">
          <h1 className="text-5xl py-2 font-bold">Create profiles for kids</h1>
          <p className="text-3xl p-2">
            Send children on adventures with their favourite characters in a
            space made just for them-free with your membership.
          </p>
        </div>
      </div>
      <div className="bg-[rgb(45,45,45)] h-2"></div>
    </>
  );
};

export default FifthSection;
