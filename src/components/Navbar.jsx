import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { modeHandler } from "../store/actions/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

function Navbar() {
  const dispatch = useDispatch();
  const { isdarkMode } = useSelector((state) => state.darkMode);
  const { totalItems, products } = useSelector((state) => state.cartReducer);

  const switchDarkMode = () => {
    isdarkMode ? dispatch(modeHandler(false)) : dispatch(modeHandler(true));
  };

  return (
    <>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={!isdarkMode}
                  onChange={switchDarkMode}
                  aria-label="mode switch"
                />
              }
              label={isdarkMode ? "Dark Mode" : "Light Mode"}
            />
          </FormGroup>
          <Box>
            <Link to="/">
              <IconButton size="large" aria-label="show 4 new mails">
                Home
              </IconButton>
            </Link>
            <Link to="/plp">
              <IconButton size="large" aria-label="show 4 new mails">
                Products
              </IconButton>
            </Link>
            <Link to="/cart">
              <IconButton size="large" aria-label="show 4 new mails">
                Cart
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Link to="/cart">
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
