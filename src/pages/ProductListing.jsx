import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addItemHandler } from "../store/actions/cart";

function ProductListing() {
  const [productList, setProductList] = useState([]);
  const { products, totalItems } = useSelector((state) => state.cartReducer);
  const { isdarkMode } = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();
  const onClickHandler = (item) => dispatch(addItemHandler(item));

  useEffect(() => {
    //data from an api call can come here
    const productArr = JSON.parse(localStorage.getItem("productList"));
    const sortedArr =
      productArr?.length > 0 ? productArr.sort((a, b) => a.id - b.id) : [];
    setProductList(sortedArr);
  }, [products]);
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
      <Grid container>
        <Grid item xl={12} xs={6} md={8}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Products
          </Typography>
          {productList.length > 0 ? (
            productList.map((item) => (
              <List key={item?.id}>
                <Divider />
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton
                        onClick={() => onClickHandler(item)}
                        edge="end"
                        aria-label="add"
                        disabled={item?.items === 0}
                        color="inherit"
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </>
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
                    label={`Remaining items: ${item?.items}`}
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
            <h1>No Products found</h1>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductListing;
