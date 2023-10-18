import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';

const RegistrationFooter = () => {
  return (
    <div className="bg-[rgba(233,232,232,0.2)] text-[rgba(140,140,140,1)] py-10 px-20 list-none">
    <div className="pl-12 pr-28">
      <h1 className="pl-[70px] py-5">
        Questions? Call 
        <span className={`px-1 hover:underline cursor-pointer`}>
           000-800-919-1694
        </span>
      </h1>
      <div className="flex justify-around">
        <div>
          <li className="hover:underline cursor-pointer py-2">FAQ</li>
          <li className="hover:underline cursor-pointer py-2">Privacy</li>
        </div>
        <div>
          <li className="hover:underline cursor-pointer py-2">Help Centre</li>
          <li className="hover:underline cursor-pointer py-2">Cookie Perferences</li>
        </div>
        <div>
          <li className="hover:underline cursor-pointer py-2">Netflix Shop</li>
          <li className="hover:underline cursor-pointer py-2">Corporate Information</li>
        </div>
        <div>
          <li className="hover:underline cursor-pointer py-2">Terms of Use</li>
        </div>
        <div>
        </div>
      </div>
      <div className="border rounded w-36 h-10 p-2 my-5 mx-[70px] focus-visible:{false}">
        <LanguageIcon className="" style={{ padding: "2px"}}  />
        <select name="languages" className="bg-transparent  px-2">
          <option value="english" selected={true} >
            <LanguageIcon />
            English
          </option>
          <option value="hindi">हिंदी</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default RegistrationFooter
