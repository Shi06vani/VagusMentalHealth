import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// main.jsx
import "./fonts.css";
import "./index.css"; // tailwind styles
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <App />
    <Toaster/>
  </>
  
  // {/* </StrictMode>, */}
)
