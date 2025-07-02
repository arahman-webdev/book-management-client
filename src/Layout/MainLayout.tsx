import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div>
            navbar
            <Outlet />
            footer
        </div>
    );
};

export default MainLayout;