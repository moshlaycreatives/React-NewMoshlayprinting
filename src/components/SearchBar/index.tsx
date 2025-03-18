import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search products by names, needs, categories ..."
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
          borderRadius: "25px",
          padding: "8px 10px",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
        },
      }}
    />
  );
};
