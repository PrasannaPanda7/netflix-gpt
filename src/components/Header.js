import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  return (
    <div className="absolute bg-gradient-to-b from-black w-full px-2 py-2 z-20 flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-4 gap-2">
          <div className="flex-row justify-start ">
            <img className="w-20 h-12" src={user.photoURL} alt="" />
            {/* <DropMenu/> */}
          </div>
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
