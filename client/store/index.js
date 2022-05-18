import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import productsReducer from "./products";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./singleProduct";
// import addToCartReducer from "./cart";
// import checkoutReducer from "./checkout";
// import guestCheckoutReducer from "./guestCheckout";
// import usersReducer from "./users";

const reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
