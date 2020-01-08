import React from "react";
import Button from "@material-ui/core/Button";
import "./styles/Square.css";

class Square extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button
          className="buttonSquare"
          id={this.props.id}
          variant="outlined"
          onClick={this.props.onClick}
        />
      </React.Fragment>
    );
  }
}

export default Square;
