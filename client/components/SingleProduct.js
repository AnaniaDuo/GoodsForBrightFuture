import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { Link } from "react-router-dom";
import { EditProduct } from "./EditProduct";
import { Assignment } from "./Assignment";
import { setSingleProduct } from "../store/singleProduct";
import { editProduct, assignProduct } from "../store/singleProduct";

export class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      clickAssign: false,
    };
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
    console.log("state before clicked", this.state);

    return (
      <div>
        <div>Product Name: {name}</div>
        <div>Product Description: {description}</div>
        <div>Price: {price / 100}</div>
        <div>Quantity: {quantity}</div>
        <button
          onClick={() => {
            this.setState({ clickAssign: true });
          }}
        >
          Assign To Location
        </button>
        {this.state.clickAssign ? (
          <Assignment
            history={this.props.history}
            match={this.props.match}
            product={product}
            assignProduct={this.props.assignProduct}
          />
        ) : null}
        <br />
        <EditProduct
          history={this.props.history}
          match={this.props.match}
          product={product}
          editProduct={this.props.editProduct}
        />
        <Link to="/">
          <div>Back Home</div>
        </Link>
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
    assignProduct: (productId, locationId, quantity, history) =>
      dispatch(assignProduct(productId, locationId, quantity, history)),
    clearProduct: () => dispatch(setSingleProduct({})),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
