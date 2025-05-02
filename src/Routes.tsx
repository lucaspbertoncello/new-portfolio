import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
]);
