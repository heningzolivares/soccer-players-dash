import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";

import Container from "../components/common/Container";
import PageSettings from "../constants";

function NotFound() {
  return (
    <Container>
      <Helmet>
        <title>404 not found page - {PageSettings.title}</title>
      </Helmet>
      <Typography textAlign="center" variant="h1" mt={20}>
        404 not found :(
      </Typography>
    </Container>
  );
}

export default NotFound;
