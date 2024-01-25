import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="Poppins p-3 md:p-5 lg:p-10 xl:p-14 bg-[#bbbafe]">
      <App />
    </div>
  </React.StrictMode>
);
