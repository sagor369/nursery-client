import { Outlet } from "react-router-dom";
import Navbar from "./share/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-green-500 bg-opacity-20 min-h-[100vh]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;