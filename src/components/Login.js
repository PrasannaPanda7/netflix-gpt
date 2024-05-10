import { useRef, useState } from "react";
import Header from "./Header";
import { signInFormValidater } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const errorMsg = signInFormValidater(
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMsg);

    if (errorMsg) return;
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode}- ${errorMessage}`);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode}- ${errorMessage}`);
        });
    }
  };
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
            ref={name}
            type="text"
            name="email"
            placeholder="Name"
            className="p-3 my-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-black bg-opacity-40 border border-gray-600 rounded-md"
        />
        <span className="text-red-500 font-extralight">{errorMsg}</span>
        <button
          className="bg-red-700 my-4 p-2 w-full rounded-md"
          onClick={clickHandler}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer mb-4"
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
