import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "./common/Box";

const GITHUBLINK = "https://github.com/heningzolivares";
const LINKEDINLINK = "https://linkedin.com/in/heningz-olivares-dev/";

export default function Footer() {
  const handleClickGithub = () => {
    window.open(GITHUBLINK, "_blank");
  };
  const handleClickLikedin = () => {
    window.open(LINKEDINLINK, "_blank");
  };
  return (
    <Box sx={{ minHeight: 100, mt: [10, 20] }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["flex-start", "space-between"],
          alignItems: "center",
          px: 10,
          gap: [2, 0],
        }}
      >
        <Box>
          <Typography variant="caption" color="primary">
            © 2022 Heningz Olivares. All rights reserved
          </Typography>
        </Box>

        <Box>
          <IconButton onClick={handleClickGithub}>
            <GitHubIcon />
          </IconButton>
          <IconButton onClick={handleClickLikedin}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
