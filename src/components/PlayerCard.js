import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function PlayerCard({
  name,
  photo,
  nationality,
  age,
  weight,
  height,
  currentTeam,
  id,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        width: ["100%", "100%", "30.33%"],
        justifyContent: "space-between",
      }}
    >
      <Link to={`/players/${id}/${currentTeam}`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ color: "primary" }}>
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {nationality}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Age:{age}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Height:{height} Weight:{weight}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }} />
        </Box>
      </Link>

      <Link to={`/players/${id}/${currentTeam}`}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={photo}
          alt="Live from space album cover"
        />
      </Link>
    </Card>
  );
}

export default PlayerCard;
