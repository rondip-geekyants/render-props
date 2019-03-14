import React from "react";
import { debounce, throttle } from "../../utils";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      clicked: 0
    };
  }

  _handleMouseMove = e => {
    const x = e.clientX;
    const y = e.clientY;

    debounce(
      () =>
        this.setState({
          x,
          y
        }),
      500
    );
  };

  _handleMouseDown = e => {
    throttle(() => {
      this.setState({
        clicked: this.state.clicked + 1
      });
    }, 1000);
  };

  render() {
    const { x, y } = this.state;
    return (
      <div
        style={styles.container}
        onMouseMove={this._handleMouseMove}
        onMouseDown={this._handleMouseDown}
      >
        <h6>Move the mouse around (500 sec debounce)</h6>
        <div style={styles.content}>
          The current mouse position is ({x}, {y})
        </div>
        {this.props.render(this.state)}
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    height: "100vh",
    flexDirection: "column"
  },
  content: {
    fontSize: "0.9em"
  }
};
