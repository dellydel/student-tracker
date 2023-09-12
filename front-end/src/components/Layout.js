import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const Layout = () => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
