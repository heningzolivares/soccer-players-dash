import Typography from "@mui/material/Typography";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Container from "../components/common/Container";
import Chip from "../components/common/Chip";
import Box from "../components/common/Box";
import Pagination from "../components/Pagination";
import PlayerCard from "../components/PlayerCard";
import useTeams from "../hooks/useTeams";
import usePlayers from "../hooks/usePlayers";
import PageSettings from "../constants";

function Home() {
  const [currentTeam, setTeam] = React.useState(null);
  const { data: teams } = useTeams();
  const {
    data: players,
    refetch,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = usePlayers(currentTeam, currentTeam !== null);

  const handleClick = (teamId) => {
    setTeam(teamId);
    refetch();
  };

  return (
    <Container>
      <Helmet>
        <title>{PageSettings.title}</title>
      </Helmet>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 5,
          mb: 3,
        }}
      >
        {teams &&
          teams.response.length &&
          teams.response.map(({ team }) => (
            <Chip
              key={team.id}
              label={team.name}
              color={currentTeam === team.id ? "success" : "default"}
              onClick={() => handleClick(team.id)}
            />
          ))}
      </Box>

      {isLoading && <p>Loading...</p>}

      <Box
        sx={{
          display: "flex",
          alighItems: "center",
          flexWrap: "wrap",
          mx: 3,
          gap: 2,
        }}
      >
        {currentTeam &&
          players &&
          players.pages.map((group) => (
            <React.Fragment key={group.nextId}>
              {group.response.map(({ player }) => (
                <PlayerCard
                  key={player.id}
                  currentTeam={currentTeam}
                  {...player}
                />
              ))}
            </React.Fragment>
          ))}
      </Box>

      {!currentTeam && (
        <Box sx={{ mt: 10 }}>
          <Typography variant="h6" textAlign="center">
            Hola, selecciona un equipo.
          </Typography>
        </Box>
      )}

      {currentTeam && !isLoading && (
        <Pagination
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      <Outlet />
    </Container>
  );
}

export default Home;
