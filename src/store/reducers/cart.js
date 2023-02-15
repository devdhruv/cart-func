import { ADD_CART_ITEM, DELETE_CART_ITEM } from "../types";

// initial state
const initialState = {
  totalItems: 0,
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const prodAddArr = [...state.products];
      const filteredArr = prodAddArr.filter(
        (elem) => elem.id !== action.payload.id
      );
      const prevItemObj =
        prodAddArr[
          prodAddArr.findLastIndex((elem) => {
            return elem.id === action.payload.id;
          })
        ];
      return {
        totalItems: state.totalItems + 1,
        products: [
          ...filteredArr,
          {
            ...action.payload,
            items: prevItemObj ? prevItemObj.items + 1 : 1,
          },
        ],
      };
    case DELETE_CART_ITEM:
      const prodDelArr = [...state.products];
      const filteredDelArr = prodDelArr.filter(
        (elem) => elem.id !== action.payload.id
      );
      const prevDelItemObj =
        prodDelArr[
          prodDelArr.findLastIndex((elem) => {
            return elem.id === action.payload.id;
          })
        ];
      if (prevDelItemObj?.items === 1) {
        return {
          totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
          products: [...filteredDelArr],
        };
      }
      return {
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
        products: [
          ...filteredDelArr,
          {
            ...action.payload,
            items: prevDelItemObj ? prevDelItemObj.items - 1 : 0,
          },
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
