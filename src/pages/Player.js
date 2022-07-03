import { Avatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Box from "../components/common/Box";
import Container from "../components/common/Container";
import usePlayer from "../hooks/usePlayer";
import StatisticsTable from "../components/StatisticsTable";

function Player() {
  const { playerId, teamId } = useParams();
  const { data } = usePlayer(playerId, teamId, true);

  if (data && data.player) {
    const {
      player: {
        firstname,
        photo,
        lastname,
        age,
        nationality,
        height,
        weight,
        birth,
      },
      statistics,
    } = data;
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Box>
            <Avatar
              alt={firstname}
              src={photo}
              sx={{ height: 300, width: 300 }}
            />
          </Box>
          <Box sx={{ pt: 5 }}>
            <Typography variant="h2" color="primary">
              {firstname} {` `}
              {lastname}
            </Typography>

            <Typography variant="subtitle1">
              Edad:{` `}
              {age}
            </Typography>
            <Typography variant="subtitle1">
              Nacionalidad:{` `}
              {nationality}
            </Typography>
            <Typography variant="subtitle1">
              Altura:{` `}
              {height}
            </Typography>
            <Typography variant="subtitle1">
              Peso:{` `}
              {weight}
            </Typography>
            <Typography variant="subtitle1">
              Fecha de nacimiento:{` `}
              {birth.date}
            </Typography>
          </Box>
        </Box>
        <StatisticsTable statistics={statistics} />
      </Container>
    );
  }

  return null;
}

export default Player;
