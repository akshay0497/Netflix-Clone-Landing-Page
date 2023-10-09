import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";

const Footer = () => {
  return (
    <div className="text-[rgba(255,255,255,0.7)] p-20 list-none">
      <h1 className="px-20">
        Questions?Call<u>000-800-919-1694</u>
      </h1>
      <div className="flex items-start justify-around py-5">
        <div>
          <li className="py-1">
            <u>FAQ</u>
          </li>
          <li className="py-1">
            <u>Investor Relations</u>
          </li>
          <li className="py-1">
            <u>Privacy</u>
          </li>
          <li className="py-1">
            <u>Speed Test</u>
          </li>
        </div>
        <div>
          <li className="py-1">
            <u>Help Centre</u>
          </li>
          <li className="py-1">
            <u>Jobs</u>
          </li>
          <li className="py-1">
            <u>Cookie Preferences</u>
          </li>
          <li className="py-1">
            <u>Legal Notices</u>
          </li>
        </div>
        <div>
          <li className="py-1">
            <u>Account</u>
          </li>
          <li className="py-1">
            <u>Ways to Watch</u>
          </li>
          <li className="py-1">
            <u>Corporate Information</u>
          </li>
          <li className="py-1">
            <u>Only on Netflix</u>
          </li>
        </div>
        <div>
          <li className="py-1">
            <u>Media Centre</u>
          </li>
          <li className="py-1">
            <u>Terms of Use</u>
          </li>
          <li className="py-1">
            <u>Contact Us</u>
          </li>
        </div>
      </div>

      <div className="pt-10 px-20">
        <div className="border rounded w-32">
          <TranslateIcon className="text-white" style={{ padding: "2px" }} />
          <select name="languages" className="bg-transparent text-white px-2">
            <option value="english" selected={true}>
              <TranslateIcon />
              English
            </option>
            <option value="hindi">हिंदी</option>
          </select>
        </div>

        <div className="py-3">
          <h1>Netflix India</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
