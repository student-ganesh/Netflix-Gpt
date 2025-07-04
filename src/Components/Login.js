import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-11 justify-center items-center bg-black bg-opacity-80 rounded-md my-36 mx-auto right-0 left-0 text-white">
        <h2 className="font-bold text-3xl pl-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <div className="object-center">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full py-4 m-3 self-center rounded-lg bg-gray-700 bg-opacity-50"
          />

          <input
            type="password"
            placeholder="Password"
            className="py-4 m-3 w-full rounded-lg  bg-slate-700 bg-opacity-50"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="confirm password"
              className="w-full py-4 m-3 self-center rounded-lg bg-gray-700 bg-opacity-50"
            />
          )}
          <button className="py-4 m-3 bg-red-600 w-full rounded-lg ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 m-3 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
