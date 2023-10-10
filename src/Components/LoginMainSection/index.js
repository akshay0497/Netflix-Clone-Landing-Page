import React from "react";
import { Link } from "react-router-dom";
import { number } from "yup";
import { Formik, useFormik } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Please enter a valid email address or phone number.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  } else if ((value = number)) {
    if (!value <= 10) {
      error = "Please enter a valid email address or phone number.";
    }
  }
  return error;
}

const LoginMainSection = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="mx-[34%] w-fit my-20">
      <div className="flex !flex-col text-white bg-[#000000bf] rounded ">
        <div className="flex !flex-col gap-5 px-16 py-12">
          <h1 className="text-3xl bg[#fff] font-[500] ">Sign In</h1>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Email or phone number"
              className="h-12 rounded-md bg-[#333333] px-5"
            />

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="h-12 rounded-md bg-[#333333] px-5"
            />

            <button type="submit" className="bg-[#E50914] h-10 rounded text-center p-2 my-2">Submit</button>
          </form>
          <div className="text-sm flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="accent-[#333333]"
              />
              <label for="checkbox" className="px-2">
                Remember me
              </label>
            </div>
            <p>Need help?</p>
          </div>
        </div>

        <div className="px-16 pb-20">
          <div className="py-3">
            <span>
              New to Netflix?{" "}
              <Link to={"/in"}>
                <span className="!text-white font-semibold">Sign up now.</span>
              </Link>
            </span>
          </div>
          <p className="text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-[#0071eb]"> Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginMainSection;
