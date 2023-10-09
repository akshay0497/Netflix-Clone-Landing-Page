import React from 'react'
import img from '../../Assets/Images/FourthSection/device-pile-in.png'


const FourthSection = () => {
  return (
    <>
      <div className="flex items-center justify-evenly p-20 mx-10">
      <div className="text-white text-justify px-20  py-5">
        <h1 className="text-5xl  py-2 font-bold">Watch everywhere</h1>
        <p className="text-3xl p-2">
          Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
        </p>
      </div>
      <div className="relative">
        <div className="w-[500px]">
          <img src={img} />
        </div>
        <div className="absolute top-[45px] left-24 z-[-1] overflow-hidden">
          <video width={300} autoPlay={true} playsInline={true} loop={true} >
            <source
              src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div className="bg-[rgb(45,45,45)] h-2"></div>
    </>
  )
}

export default FourthSection
