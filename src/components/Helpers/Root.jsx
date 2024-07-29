import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Backdrop from "../UI/Backdrop";

const Root = () => {
  return (
    <div className="relative min-h-screen">
      <Backdrop imageUrl="assets/backdrop.jpg" blur={true} overlay={false} />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
