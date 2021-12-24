import React from "react";
import { Circle, Tooltip } from "react-leaflet";
const RestrictedRegion = ({ lat, long }) => (
  <Circle
    center={[lat, long]}
    style={{ backgroundColor: "red", color: "red" }}
    PathOptions={{ fillColor: "red", color: "red" }}
    radius={4000}
  >
    <Tooltip>Restricted Region</Tooltip>
  </Circle>
);
export default RestrictedRegion;
