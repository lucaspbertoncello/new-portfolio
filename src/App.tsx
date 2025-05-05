import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
}
