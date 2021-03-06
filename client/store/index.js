import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import productsReducer from "./products";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./singleProduct";
import locationsReducer from "./locations";

const reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  locations: locationsReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
