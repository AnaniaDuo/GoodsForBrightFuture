import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/products";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import AssignAll from "./AssignAll";
import { assignAll } from "../store/products";

export class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    console.log("products are ------", products);

    return (
      <div>
        <AddProduct />
        <hr />

        <h2>Unassigned Inventory</h2>

        <button onClick={() => this.setState({ click: true })}>
          Assign All Products To A Location
        </button>
        {this.state.click && (
          <AssignAll
            history={this.props.history}
            match={this.props.match}
            assignAll={this.props.assignAll}
          />
        )}

        {products.map(({ id, name, description, price, quantity }) => (
          <div key={id}>
            <br />
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
        <Link to="/">
          <div>Back Home</div>
        </Link>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    assignAll: (locationId, history) =>
      dispatch(assignAll(locationId, history)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
