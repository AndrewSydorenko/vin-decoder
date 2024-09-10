import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../Styles";
import { Button } from "@mui/material";

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <NavLink to="/" end>
          <h1>VIN DECODER</h1>
        </NavLink>
        <nav>
          <NavLink to="/variables">
            <Button variant="outlined">Variables</Button>
          </NavLink>
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};
