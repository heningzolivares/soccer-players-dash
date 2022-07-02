import MuiContainer from "@mui/material/Container";

function Container({ children, ...rest }) {
  return <MuiContainer {...rest}>{children}</MuiContainer>;
}

export default Container;
