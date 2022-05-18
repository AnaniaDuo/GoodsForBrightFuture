import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { Link } from "react-router-dom";
import { EditProduct } from "./EditProduct";
import { setSingleProduct } from "../store/singleProduct";
import { editProduct } from "../store/singleProduct";

export class SingleProduct extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }
  render() {
    const { product } = this.props;
    const { name, description, price, quantity } = product;

    return (
      <div>
        <div>Product Name: {name}</div>
        <div>Product Description: {description}</div>
        <div>Price: {price / 100}</div>
        <div>Quantity: {quantity}</div>
        <button>Assign To Location</button>
        <br />
        <EditProduct
          history={this.props.history}
          match={this.props.match}
          product={product}
          editProduct={this.props.editProduct}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return { product: state.product };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    editProduct: (product) => dispatch(editProduct(product, history)),
    clearProduct: () => dispatch(setSingleProduct({})),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
