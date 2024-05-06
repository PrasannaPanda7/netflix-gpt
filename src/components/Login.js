import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="body"
        />
      </div>
      <form className="bg-black bg-opacity-80 absolute w-3/12 mx-auto left-0 right-0 mt-48 text-white p-10">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="email"
            placeholder="Name"
            className="p-3 my-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
        />
        <button className="bg-red-700 my-4 p-2 w-full rounded-md">
          {isSignInForm ? "Sign Ip" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
