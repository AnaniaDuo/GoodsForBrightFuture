import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/products";

export class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.props.addProduct({ ...this.state });
    this.setState({ name: "", description: "", price: 0, quantity: 0 });
  }

  render() {
    console.log("props in all products", this.props);
    const { handleSubmit, handleChange } = this;
    const { name, description, price, quantity } = this.state;

    return (
      <div>
        <h2>
          <label htmlFor="add-product-header">Add New Product</label>
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name*</label>
            <input name="name" required onChange={handleChange} value={name} />
            <br />
            <label htmlFor="description">Description*</label>
            <input
              name="description"
              required
              onChange={handleChange}
              value={description}
            />
            <br />
            <label htmlFor="price">Price*</label>
            <input
              name="price"
              type="number"
              required
              onChange={handleChange}
              value={price}
            />
            <br />
            <label htmlFor="price">Quantity*</label>
            <input
              name="quantity"
              type="number"
              required
              onChange={handleChange}
              value={quantity}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
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
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapState, mapDispatch)(AddProduct);
