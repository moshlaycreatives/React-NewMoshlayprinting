import "./styles.css";
import { MuiButton } from "../MuiButton";
import { SearchBar } from "../SearchBar";
import logo from "../../assets/logo/logo.png";
import { Button } from "@mui/material";
import { navBarMenues } from "./data";

export const NavBar = () => {
  return (
    <div className="main-container">
      {/* Upper Part */}
      <div className="navbar-upper">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <div className="navbar-search">
          <SearchBar />
        </div>

        <div className="navbar-button">
          <MuiButton variant="contained">Let's talk</MuiButton>
        </div>
      </div>

      {/* Lower Part */}
      <div className="navbar-lower">
        {navBarMenues.map((menu, index) => (
          <Button key={index} variant="text" className="navbar-menu-button">
            {menu}
          </Button>
        ))}
      </div>
    </div>
  );
};
