import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-full px-4 py-2 z-20">
      <img className="w-40" src={LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
