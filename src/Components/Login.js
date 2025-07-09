import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validation";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { AVATAR_URL, BG_URL } from "../Utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validations for form data

    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;
    // (Sign up/in logic)

    if (!isSignInForm) {
      // SignUp Form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { AVATAR_URL },
          })
            .then(() => {
              // Profile updated!
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
              // An error occurred
              setErrorMessage(error.msg);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn Form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage + " PLEASE MAKE SURE");
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-11 justify-center items-center bg-black bg-opacity-80 rounded-md my-36 mx-auto right-0 left-0 text-white"
      >
        <h2 className="font-bold text-3xl pl-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <div className="object-center">
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full py-4 m-3 px-2 self-center rounded-lg bg-gray-700 bg-opacity-50"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full py-4 m-3 px-2 self-center rounded-lg bg-gray-700 bg-opacity-50"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-4 m-3 px-2 w-full rounded-lg  bg-slate-700 bg-opacity-50"
          />

          <p className="text-red-500 p-4 text-clip">{errorMessage}</p>

          <button
            className="py-4 m-3 bg-red-600 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 m-3 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up Now🤷‍♂️"
              : "Already Registered? Sign In Now😃"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
