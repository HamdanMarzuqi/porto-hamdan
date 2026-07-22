import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <App />
      </main>
      <Footer />
    </div>
  </StrictMode>
);
