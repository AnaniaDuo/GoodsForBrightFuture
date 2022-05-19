import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocations } from "../store/locations";
import { Link } from "react-router-dom";
import AddLocation from "./AddLocation";

export class AllLocations extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    const { locations } = this.props;

    return (
      <div>
        <AddLocation />
        <hr />
        <h2>Locations and Inventory Details</h2>
        {locations.map((location) => {
          return (
            <div key={location.id}>
              <h3>Location ID: {location.id}</h3>
              <div>Location Name: {location.name}</div>
              <div>Location Address: {location.address}</div>
              <div>
                <br />
                <div>INVENTORY DETAILS AT THIS LOCATION: </div>
                <br />

                {location.products &&
                  location.products.map((prod) => {
                    return (
                      <div key={prod.id}>
                        <div>Product Name: {prod.name}</div>
                        <div>Product Id: {prod.id}</div>
                        <div>Quantity: {prod.location_product.quantity}</div>
                      </div>
                    );
                  })}
              </div>
              <hr />
            </div>
          );
        })}
        <Link to="/">
          <div>Back Home</div>
        </Link>
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
    getLocations: () => dispatch(fetchLocations()),
  };
};

export default connect(mapState, mapDispatch)(AllLocations);
