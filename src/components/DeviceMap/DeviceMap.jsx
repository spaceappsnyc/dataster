import React from "react";
import { Map, TileLayer } from "react-leaflet";

const position = [1.2911, 103.6436];
export const DeviceMap = () => {
  return (
    <div style={{ width: "inherit", height: "inherit" }}>
      <Map center={position} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
};
