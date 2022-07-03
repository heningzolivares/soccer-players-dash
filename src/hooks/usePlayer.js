import { useQuery } from "react-query";
import client from "../services/client";

const { apiGet } = client;

async function fetchPlayer({ playerId, teamId }) {
  return apiGet(`players?id=${playerId}&team=${teamId}&season=2021`);
}
function usePlayer(playerId, teamId, enabled) {
  return useQuery(
    ["player", playerId, teamId],
    async () => {
      const res = await fetchPlayer({ playerId, teamId });
      const { response } = res;
      if (response.length === 0) {
        throw new Error("no data");
      }
      const [player] = response;
      return player;
    },
    {
      enabled,
    }
  );
}

export default usePlayer;
