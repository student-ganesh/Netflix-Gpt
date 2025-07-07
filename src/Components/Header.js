import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { DEF_AVATAR, NET_LOGO, SUPPORTED_LANG } from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import lang from "../Utils/languageConstant";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div
      className={`w-screen px-8 py-2  flex justify-between items-center z-50 absolute ${
        isBrowsePage ? "bg-gradient-to-b from-black" : "bg-transparent absolute"
      }`}
    >
      {/* Netflix Logo */}

      <img className="w-44" src={NET_LOGO} alt="logo" />

      {/* User Icon with Dropdown */}

      {isBrowsePage && user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="px-2 -my-1 h-12 rounded-md  bg-gray-700 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-700 -my-1 mx-4 px-2 m-2 rounded-md h-12 text-semibold "
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <div className="group flex-col pl-4 items-center justify-center">
            <img
              className="w-10 h-10 rounded-md ml-2 bg-white p-1"
              alt="usericon"
              src={user?.photoURL ? user?.photoURL : DEF_AVATAR}
            />

            <button
              onClick={handleSignOut}
              className="text-white font-bold -mt-2 py-3 text-center"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
