import MuiChip from "@mui/material/Chip";

function Chip({ children, ...rest }) {
  return <MuiChip {...rest}>{children}</MuiChip>;
}

export default Chip;
