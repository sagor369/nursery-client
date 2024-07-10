
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import NavbarManu from "./NavbarManu";

const Navbar = () => {
  return (
    <div className="bg-primary-gradian p-2  rounded-md my-4">
      <div className="rounded-md font-semibold font-barlow bg-green-800 text-white   py-2 w-full">
        <div className="px-4 flex justify-between items-center">
          <img src={logo} alt="logo" className="w-20 h-6" />

          <SearchBar></SearchBar>
          <div>
            <Button className="bg-inherit border ">Login</Button>
          </div>
        </div>
        <NavbarManu></NavbarManu>
      </div>
    </div>
  );
};

export default Navbar;
