import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 35.8288175,
      lng: 10.6405392
    },
    zoom: 11
  };

  return (

    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '500px',margin:' auto' }}>
      <h1 style={{ marginLeft:"130px" }}>google-map-react</h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
