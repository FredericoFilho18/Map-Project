import logo from "./logo.svg";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends React.Component {
  defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBsVYbXTR0-3uuTQZBIb60wUDuvZXxXTOI" }}
          defaultCenter={this.defaultProps.center}
          defaultZoom={this.defaultProps.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
export default App;
