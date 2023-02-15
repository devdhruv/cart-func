import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
function Footer() {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "grey",
        }}
        component="footer"
        variant="outlined"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 2,
          }}
        >
          <Typography level="body2">Company Footer </Typography>
          <Typography level="body3" sx={{ ml: "auto" }}>
            Copyright 2023
          </Typography>
        </Box>
      </Paper>
    </>
  );
}

export default Footer;
