import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const NewButton = styled((props) => <Button {...props} />)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "whitesmoke",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function CustomButton({ disabled, handleClick, children, sx }) {
  return (
    <NewButton
      disabled={disabled}
      sx={sx}
      onClick={handleClick}
      children={children}
    />
  );
}

export default CustomButton;
