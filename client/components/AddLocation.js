import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addLocation } from "../store/locations";

export class AddLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
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
    this.props.addLocation({ ...this.state });
    this.setState({ name: "", address: "" });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, address } = this.state;

    console.log("state in add address", this.state);
    console.log("what about props", this.props);
    return (
      <div>
        <h2>
          <label htmlFor="add-location-header">Add New Location</label>
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name*</label>
            <input name="name" required onChange={handleChange} value={name} />
            <br />
            <label htmlFor="address">Address*</label>
            <input
              name="address"
              required
              onChange={handleChange}
              value={address}
            />
            <br />
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
    locations: state.locations,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addLocation: (location) => dispatch(addLocation(location)),
  };
};

export default connect(mapState, mapDispatch)(AddLocation);
