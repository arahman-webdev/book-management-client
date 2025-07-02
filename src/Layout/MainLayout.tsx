import Footer from "@/providers/Footer";
import Navbar from "@/providers/Navbar";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;