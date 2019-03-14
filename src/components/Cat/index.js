import React from "react";

import withMouseTracker from "../MouseTracker";

import * as cat from "../../assets/icons/cat.png";

const Cat = ({ coordinates }) => (
  <React.Fragment>
    <img
      alt="cat"
      src={cat}
      style={{
        ...styles.image,
        left: coordinates.x,
        top: coordinates.y
      }}
    />
    <span>Click (1000s throttle): {coordinates.clicked}</span>
  </React.Fragment>
);

export default withMouseTracker(Cat);

const styles = {
  image: {
    position: "absolute",
    height: 100,
    width: 100
  }
};
