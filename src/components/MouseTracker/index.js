import React from "react";
import Mouse from "./Mouse";

const withMouseTracker = Component => {
  class Tracker extends React.PureComponent {
    render() {
      return (
        <Mouse
          render={coordinates => (
            <Component {...this.props} coordinates={coordinates} />
          )}
        />
      );
    }
  }
  return Tracker;
};

export default withMouseTracker;
