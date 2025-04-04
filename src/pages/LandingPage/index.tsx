import { Divider } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { HeroSection } from "../../components/HeroSection";

export const LandingPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Divider sx={{ backgroundColor: "#242424" }} />
      <div>
        <HeroSection />
      </div>
    </div>
  );
};
