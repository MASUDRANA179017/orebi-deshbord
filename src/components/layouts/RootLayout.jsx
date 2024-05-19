import { Outlet } from "react-router-dom";
import MenuBar from "./Menu";

export const RootLayout = () => {
  return (
    <>
      <div className="menubar">
        <MenuBar />
        <Outlet className="outlet" />
      </div>
    </>
  );
};
