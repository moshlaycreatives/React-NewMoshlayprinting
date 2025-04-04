import { Button } from "@mui/material";
import "./styles.css";

type MuiButtonProps = {
  children: string;
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
  styles?: React.CSSProperties;
  sx?: object;
  endIcon?: React.ReactNode;
};

export const MuiButton = (props: MuiButtonProps) => {
  const variant = props.variant || "contained";

  return (
    <Button
      className={`mui-button ${variant}`}
      sx={{
        borderRadius: "999px",
        width: "130px",
        height: "45px",
        textTransform: "none",
        ...(variant === "contained" && {
          color: "white",
          backgroundColor: "black",
          border: "none",
        }),
        ...(variant === "outlined" && {
          color: "black",
          backgroundColor: "white",
          border: "1px solid black",
        }),
        ...(variant === "text" && {
          color: "black",
          backgroundColor: "transparent",
          border: "none",
        }),
        ...props.sx,
      }}
      onClick={props.onClick}
      endIcon={props.endIcon}
      style={props.styles}
    >
      {props.children}
    </Button>
  );
};
