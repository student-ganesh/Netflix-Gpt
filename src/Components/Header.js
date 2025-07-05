import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { DEF_AVATAR, NET_LOGO } from "../Utils/constant";

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const isBrowsePage = location.pathname === "/Browse";
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (location.pathname !== "/Browse") {
          navigate("/Browse");
        }
      } else {
        //When User is signed out
        dispatch(removeUser());

        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [location.pathname, dispatch, navigate]);
  return (
    <div
      className={`w-full px-8 py-2 flex justify-between items-center z-50 ${
        isBrowsePage ? "bg-gradient-to-t absolute from-black" : "bg-transparent"
      }`}
    >
      {/* Netflix Logo */}
      <img className="w-44" src={NET_LOGO} alt="logo" />

      {/* User Icon with Dropdown */}
      {user && (
        <div className="group flex-col items-center justify-center">
          <img
            className="w-10 h-10 rounded-md  bg-white p-1"
            alt="usericon"
            src={user?.photoURL ? user?.photoURL : DEF_AVATAR}
          />
          <button onClick={handleSignOut} className="font-bold mr-5 py-3">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
