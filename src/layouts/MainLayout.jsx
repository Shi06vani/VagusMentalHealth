import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div >
      <Navbar />
      <div className="min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
