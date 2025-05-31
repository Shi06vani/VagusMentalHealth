import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { navbarRoutes } from "./routes/NavbarRoutes";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardLayout from "./dashboard/layout/DashboardLayout";
import DashboardHome from "./dashboard/pages/DashboardHome";
import Chat from "./dashboard/pages/Chat";
import Journal from "./dashboard/pages/Journal";
import Aos from "aos";
import { useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 500,
    });
    Aos.refresh();
  }, []);
  Aos.init();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {navbarRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="chat" element={<Chat />} />
          <Route path="journal" element={<Journal />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
