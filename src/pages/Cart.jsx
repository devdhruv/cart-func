import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItemHandler } from "../store/actions/cart";

function Cart() {
  const [cartItemList, setCartItemList] = useState([]);

  const { products, totalItems } = useSelector((state) => state.cartReducer);
  const { isdarkMode } = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  const onClickHandler = (item) => dispatch(deleteItemHandler(item));

  useEffect(() => {
    const cartItemArr = [...products];
    const sortedArr =
      cartItemArr?.length > 0 ? cartItemArr.sort((a, b) => a.id - b.id) : [];
    setCartItemList(sortedArr);
  }, [products]);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "30px auto",
        maxWidth: 500,
        minHeight: 500,
        flexGrow: 1,
        backgroundColor: isdarkMode ? "#000 !important" : "#fff",
        color: isdarkMode ? "#fff" : "#000",
      }}
    >
      <Grid container>
        <Grid item xl={12} xs={6} md={8}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {totalItems} Items in your Cart
          </Typography>
          {cartItemList.length > 0 ? (
            cartItemList.map((item, index) => (
              <List key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      onClick={() => onClickHandler(item)}
                      edge="end"
                      aria-label="add"
                      color="inherit"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`Item Name: ${item?.pName}`} />
                </ListItem>
                <Box mb={1} color="inherit">
                  <Chip
                    label={`Count: ${item?.items}`}
                    variant="outlined"
                    sx={{
                      backgroundColor: isdarkMode ? "#000 !important" : "#fff",
                      color: isdarkMode ? "#fff" : "#000",
                    }}
                  />
                </Box>
              </List>
            ))
          ) : (
            <Typography> No Items</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Cart;
