import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/products";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

export class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {/* <button>Add a New Item</button> */}
        <AddProduct />
        <hr />
        <div />
        <br />
        {products.map(({ id, name, description, price, quantity }) => (
          <div key={id}>
            <Link to={`/products/${id}`}>
              <div>Product Name: {name}</div>
            </Link>
            <div>Product Description: {description}</div>
            <div>Price: {price / 100}</div>
            <div>Quantity: {quantity}</div>
            <button
              onClick={() => {
                this.props.deleteProduct(id);
              }}
            >
              Delete
            </button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
