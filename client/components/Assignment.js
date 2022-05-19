import React, { Component } from "react";

export class Assignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationId: "",
      quantity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.assignProduct(
      parseInt(this.props.product.id),
      parseInt(this.state.locationId),
      parseInt(this.state.quantity),
      this.props.history
    );
  }

  render() {
    console.log("props for assignment", this.props);
    const { handleChange, handleSubmit } = this;
    const { locationId, quantity } = this.state;
    return (
      <div>
        <h2>Location and Quantity Info</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="locationId">Location ID: </label>
          <input
            name="locationId"
            required
            type="number"
            min={0}
            onChange={handleChange}
            value={locationId}
          />
          <br />
          <label htmlFor="quantity">Quantity:</label>
          <input
            name="quantity"
            required
            type="number"
            min={0}
            onChange={handleChange}
            value={quantity}
          />
          &nbsp;&nbsp; <button type="submit">Assign</button>
        </form>
      </div>
    );
  }
}

export default Assignment;
