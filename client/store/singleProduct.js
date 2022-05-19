import axios from "axios";

const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const ASSIGN_PRODUCT = "ASSIGN_PRODUCT";

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};
export const _editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};
export const _assignProduct = (product) => {
  return {
    type: ASSIGN_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(setSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProduct = (product, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}`, product);
      dispatch(_editProduct(data));
      history.push("/products");
    } catch (error) {
      console.log(error);
    }
  };
};

export const assignProduct = (productId, locationId, quantity, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/locations/${locationId}/${productId}`,
        {
          quantity: quantity,
        }
      );
      console.log("data----", data);
      dispatch(_assignProduct(data));
      history.push("/products");
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    case EDIT_PRODUCT:
      return action.product;
    case ASSIGN_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
