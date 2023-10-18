import React from "react";
import logo from "../../Assets/Images/Header/Netflix-Logo.svg";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className={styles.maincontents}>
      <div id="header" className="pl-5 bg-black">
        <Link to={'/'}>
        <img src={logo} className="w-32" />
        </Link>
      </div>
      <div className="flex !flex-col pt-10 pb-5 gap-[110px]">
        <div className="text-center my-20">
          <h1 className="text-5xl font-bold">Lost your Way?</h1>
          <p className="py-5 text-lg">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <button
            type="submit"
            className="w-32 h-10 rounded-lg bg-[#fff] text-[#000] font-semibold p-1 text-lg"
          >
            <Link to={"/"}>Netflix Home</Link>
          </button>
          <div className="py-4 text-lg">
            <span>
              Error Code <strong>NSES-404</strong>
            </span>
          </div>
        </div>
        <div className="!text-end text-sm text-[#8c8f8f] pr-10">
          <h1>
            FROM <strong>LOST IN SPACE</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
