import { Outlet } from "react-router";
import "./App.css";
import NavbarTop from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarTop />
      <Outlet />
    </>
  );
}

export default App;
