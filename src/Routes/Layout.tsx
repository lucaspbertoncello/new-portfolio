import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ThemeButton from "../components/ThemeButton";

export default function Layout() {
  return (
    <>
      <Header />
      <ThemeButton />
      <Outlet />
    </>
  );
}
