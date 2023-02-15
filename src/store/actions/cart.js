import { ADD_CART_ITEM, DELETE_CART_ITEM } from "../types";

export const addItemHandler = (item) => async (dispatch) => {
  const prodArr = JSON.parse(localStorage.getItem("productList"));
  prodArr.splice(
    prodArr.findIndex((elem) => {
      return elem.pName === item.pName;
    }),
    1
  );
  localStorage.setItem(
    "productList",
    JSON.stringify([
      ...prodArr,
      { ...item, items: item?.items > 0 ? item?.items - 1 : item?.items },
    ])
  );

  dispatch({
    type: ADD_CART_ITEM,
    payload: item,
  });
};

export const deleteItemHandler = (item) => async (dispatch) => {
  const prodArr = JSON.parse(localStorage.getItem("productList"));
  prodArr.splice(
    prodArr.findIndex((elem) => {
      return elem.pName === item.pName;
    }),
    1
  );
  localStorage.setItem(
    "productList",
    JSON.stringify([
      ...prodArr,
      { ...item, items: item?.items <= 99 ? item?.items + 1 : item.items },
    ])
  );

  dispatch({
    type: DELETE_CART_ITEM,
    payload: item,
  });
};
