import React, { Component } from "react";

export class AssignAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationId: "",
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
    this.props.assignAll(parseInt(this.state.locationId), this.props.history);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { locationId } = this.state;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="locationId">Assign to Location ID: </label>
          <input
            name="locationId"
            required
            type="number"
            min={0}
            onChange={handleChange}
            value={locationId}
          />
          <br />
          &nbsp;&nbsp; <button type="submit">Assign</button>
        </form>
      </div>
    );
  }
}

export default AssignAll;
