import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Home() {
  const { isdarkMode } = useSelector((state) => state.darkMode);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "30px auto",
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: isdarkMode ? "#000 !important" : "#fff",
        color: isdarkMode ? "#fff" : "#000",
      }}
    >
      <Typography variant="h4" component={"h1"}>
        What can we expect from this app
      </Typography>
      <ul>
        <li>Outlet using react-router-dom v6</li>
        <li>Product Listing Page</li>
        <li>Cart Page</li>
        <li>Dark/ light mode using redux</li>
        <li>Usage of Redux</li>
        <li>
          We can further extend this cart by using localStorage. Intentionally,
          not used so that won't need to reset by deleting key from localStorage
          in browser application
        </li>
      </ul>
    </Paper>
  );
}

export default Home;
