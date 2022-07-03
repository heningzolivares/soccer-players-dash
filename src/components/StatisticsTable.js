import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Stack, Typography } from "@mui/material";

function StatisticsTable({ statistics }) {
  return (
    <Box sx={{ mt: 5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Liga</TableCell>
              <TableCell>Equipo</TableCell>
              <TableCell>Goles</TableCell>
              <TableCell>Disparos</TableCell>
              <TableCell>Pases</TableCell>
              <TableCell>Faltas</TableCell>
            </TableRow>
          </TableHead>
          {statistics.map((stats) => {
            const { league, team, goals, passes, fouls, shots } = stats;
            return (
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Stack direction="row" alignItems="center">
                      <Avatar alt={league.name} src={league.logo} />
                      <Typography>
                        {league.name} ({league.country})
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Avatar alt={team.name} src={team.logo} />
                      <Typography>{team.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography>{goals.total}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{shots.total || 0}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{passes.total || 0}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{fouls.committed || 0}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StatisticsTable;
