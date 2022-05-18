import axios from "axios";

//ACTION TYPE
const SET_PRODUCTS = "SET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//ACTION CREATOR
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

export const _addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

//THUNK
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`);
      dispatch(_deleteProduct(data));
      history.push("/products");
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (product, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/products", product);
      dispatch(_addProduct(data));
      history.push("/products");
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case DELETE_PRODUCT:
      return [...state].filter((prod) => prod.id !== action.product.id);
    case ADD_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
}
