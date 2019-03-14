import React from "react";

import * as lion from "../../assets/icons/lion.png";

const Lion = ({ coordinates }) => (
  <img
    alt="lion"
    src={lion}
    style={{
      ...styles.image,
      left: coordinates.x,
      top: coordinates.y
    }}
  />
);

export default Lion;

const styles = {
  image: {
    position: "absolute",
    height: 100,
    width: 100
  }
};
