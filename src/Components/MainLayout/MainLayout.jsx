import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import Home from "../Home";

const MainLayout = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              color: "red",
            },
          },
        }}
      />
      <Navbar></Navbar>

  <div className="min-h-[calc(100vh-286px)]">
  <Outlet></Outlet>
  </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
