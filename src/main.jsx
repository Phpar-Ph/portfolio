import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <div className="relative h-screen w-full bg-slate-950">
    {/* Background Layer */}
    <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

    {/* App Content */}
    <div className="relative overflow-y-auto h-screen">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </div>
);
