import MuiContainer from "@mui/material/Container";

function Container({ children, ...rest }) {
  return (
    <MuiContainer {...rest} sx={{ minHeight: "50vh", ...rest.sx }}>
      {children}
    </MuiContainer>
  );
}

export default Container;
