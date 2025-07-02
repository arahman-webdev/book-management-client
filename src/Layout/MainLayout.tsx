import Navbar from "@/providers/Navbar";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            footer
        </div>
    );
};

export default MainLayout;