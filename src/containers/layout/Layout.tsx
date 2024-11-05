
import { Outlet } from 'react-router-dom';
import { DashboardNavbar } from '../../components/dashboard/DashboardNavbar';
import { DashBoardSideBar } from '../../components/dashboard/DashboardSideBar';
import { ReactNotifications } from 'react-notifications-component';
const Layout = () => {
    return (
        <div className="flex bg-slate-100 w-screen">
        <ReactNotifications/>

            <DashBoardSideBar />
            <div className="flex p-[12px] w-full flex-col h-full">
                <DashboardNavbar />
                <div className="flex-1">
                   <Outlet /> 
                </div>
            </div>
        </div>
    );
};
export default Layout;