import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";
import { toogleGptSearch } from "../redux/gptSlice";
import { SUPPORTED_LANG } from "./utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

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
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        removeUser();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toogleGptSearchBar = () => {
    dispatch(toogleGptSearch());
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-full px-2 py-2 z-20 flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-4 gap-2">
          {showGpt && (
            <select className="p-2 bg-gray-600 text-white rounded-md">
              {SUPPORTED_LANG.map((lang) => (
                <option value={lang.identifier}>{lang.value}</option>
              ))}
            </select>
          )}
          <button
            className="p-2 w-full hover:bg-opacity-35 bg-gray-600 bg-opacity-50 text-white rounded-md"
            onClick={toogleGptSearchBar}
          >
            {showGpt ? "Homepage" : "Explore"}
          </button>
          <img className="w-20 h-12" src={user.photoURL} alt="" />
          <button
            className="p-2 w-full bg-red-700 rounded-md text-white "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
