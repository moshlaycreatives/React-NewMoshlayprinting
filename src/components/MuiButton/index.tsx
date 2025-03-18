import { Button } from "@mui/material";

type MuiButtonProps = {
  children: string;
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
  styles?: React.CSSProperties;
  sx?: React.CSSProperties;
  endIcon?: React.ReactNode;
};

export const MuiButton = (props: MuiButtonProps) => {
  const variant = props.variant ? props.variant : "contained";
  return (
    <Button
      variant={variant}
      style={{
        color: variant === "contained" ? "white" : "black",
        backgroundColor: variant === "contained" ? "black" : "white",
        borderRadius: "999px",
        border: variant === "outlined" ? "1px solid black" : "none",
        ...props.styles,
      }}
      sx={props.sx}
      onClick={props.onClick}
      endIcon={props.endIcon}
    >
      {props.children}
    </Button>
  );
};
