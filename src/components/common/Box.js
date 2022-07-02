import MuiBox from "@mui/material/Box";

function Box({ children, ...rest }) {
  return <MuiBox {...rest}>{children}</MuiBox>;
}

export default Box;
