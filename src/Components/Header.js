import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="left-0 relative w-screen px-8 items-center py-2 bg-gradient-to- from-gray-900 z-10 flex justify-between">
      {/* Netflix Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* User Icon with Dropdown */}
      {user && (
        <div className="relative group flex-col items-center  justify-center">
          <img
            className="w-10 h-10 rounded-md  bg-white p-1 space-x-4 cursor-pointer"
            alt="usericon"
            src={user?.photoURL}
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
