import { Outlet } from "react-router-dom";
import { Navbar } from "..";

function RootLayout() {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
