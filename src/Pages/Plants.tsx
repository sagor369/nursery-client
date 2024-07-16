import NavbarManu from "@/components/layout/share/NavbarManu";
import SearchBar from "@/components/layout/share/SearchBar";
import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/logo.png";
import UserBar from "@/components/layout/share/UserBar";
import Footer from "@/components/layout/share/Footer";

const Plants = () => {
  return (
    <div>
      <div className="bg-primary-gradian p-2  rounded-md mt-4">
        <div className="rounded-md font-semibold font-barlow bg-green-800 text-white   py-2 w-full">
          <div className="px-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-20 h-6" />
              </Link>
              <NavbarManu></NavbarManu>
            </div>
            <SearchBar></SearchBar>
            <UserBar></UserBar>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Plants;
