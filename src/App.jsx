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
function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
