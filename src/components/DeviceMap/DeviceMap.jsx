import React from "react";
import { Map, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";

export const DeviceMap = props => {
  return (
    <div style={{ width: "inherit", height: "inherit" }}>
      <Map center={props.position} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
};

DeviceMap.propTypes = {
  position: PropTypes.array
};
