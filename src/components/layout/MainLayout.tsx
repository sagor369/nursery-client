import { Outlet } from "react-router-dom";
import Navbar from "./share/Navbar";
import Footer from "./share/Footer";

const MainLayout = () => {
    return (
        <div className="bg-green-500 bg-opacity-20 min-h-[100vh]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;