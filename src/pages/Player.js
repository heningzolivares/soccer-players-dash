import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import Box from "../components/common/Box";
import Container from "../components/common/Container";
import usePlayer from "../hooks/usePlayer";
import StatisticsTable from "../components/StatisticsTable";
import PageSettings from "../constants";

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
        <Helmet>
          <title>
            {firstname} {lastname} - {PageSettings.title}
          </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            gap: [2, 10],
          }}
        >
          <Box sx={{ margin: ["auto", 0] }}>
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
            <Box sx={{ textAlign: ["center", "left"] }}>
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
                {dayjs(birth.date).format("DD MMMM YYYY")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <StatisticsTable statistics={statistics} />
      </Container>
    );
  }

  return null;
}

export default Player;
