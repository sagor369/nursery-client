import logo from "@/assets/logo.png";
import SearchBar from "./SearchBar";
import NavbarManu from "./NavbarManu";
import UserBar from "./UserBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-primary-gradian p-2  rounded-md mt-4">
      <div className="rounded-md font-semibold font-barlow bg-green-800 text-white   py-2 w-full">
        <div className="px-4 flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-32 h-8" />
          </Link>

          <SearchBar></SearchBar>
          <UserBar></UserBar>
        </div>
        <div className="border-t-2 mt-4 py-2">
          <NavbarManu></NavbarManu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
