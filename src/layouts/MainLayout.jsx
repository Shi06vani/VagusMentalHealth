import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useState } from "react";
import AuthModal from "../components/common/model/AuthModal";

const MainLayout = () => {
  const [authModalType, setAuthModalType] = useState(null); // 'login' or 'signup'
  const closeModal = () => setAuthModalType(null);
  return (
    <div>
      <Navbar openLogin={() => setAuthModalType("login")} />
      <div className="min-h-screen ">
        <Outlet />
        {authModalType && (
          <AuthModal onClose={closeModal}>
            {authModalType === "login" ? <Login openSignup={() => setAuthModalType("signup")} /> : <Signup openLogin={() => setAuthModalType("login")}/>}
          </AuthModal>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
