import { Outlet } from "react-router-dom";
import Navbar from "./share/Navbar";
import Footer from "./share/Footer";

const MainLayout = () => {
  return (
    <div className="bg-green-500 bg-opacity-20 ">
      <Navbar></Navbar>
      <div className="min-h-[100vh] max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
