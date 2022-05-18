import React, { Component } from "react";

export class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        name: this.props.product.name || "",
        description: this.props.product.description || "",
        price: this.props.product.price || 0,
        quantity: this.props.product.quantity,
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editProduct({ ...this.props.product, ...this.state });
  }
  render() {
    const { handleChange, handleSubmit } = this;
    const { name, description, price, quantity } = this.state;
    return (
      <div>
        <h2>Edit Product Here</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name: </label>
          <input name="name" required onChange={handleChange} value={name} />
          <br />
          <label htmlFor="description">Product Description: </label>
          <input
            name="description"
            required
            onChange={handleChange}
            value={description}
          />
          <br />
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            required
            type="number"
            onChange={handleChange}
            value={price}
          />
          <br />
          <label htmlFor="quantity">Quantity:</label>
          <input
            name="quantity"
            required
            type="number"
            onChange={handleChange}
            value={quantity}
          />
          &nbsp;&nbsp; <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
