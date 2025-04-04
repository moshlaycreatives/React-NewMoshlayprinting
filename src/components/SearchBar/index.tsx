import { TextField } from "@mui/material";
import searchIcon from "../../assets/icons/search.png";

export const SearchBar = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        border: "1px solid #242424",
        borderRadius: "999px",
        padding: "8px 16px",
        width: "80%",
      }}
    >
      {/* Custom Search Icon Image */}
      <img
        src={searchIcon}
        alt="Search Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />

      {/* Search Area */}
      <TextField
        variant="standard"
        placeholder="Search products by names, needs, categories..."
        slotProps={{
          input: {
            disableUnderline: true,
            style: { color: "#242424" },
          },
        }}
        sx={{
          "& input::placeholder": {
            color: "#242424",
            opacity: 1,
            fontStyle: "italic",
          },
          width: "100%",
        }}
        fullWidth
      />
    </div>
  );
};
