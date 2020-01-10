import React from "react";
import Button from "@material-ui/core/Button";
import "./styles/Square.css";

class Square extends React.Component {
  state = {
    valor: ""
  };

  updateState = stateModify => {
    this.setState({ valor: stateModify });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          className="buttonSquare"
          id={this.props.id}
          variant="outlined"
          onClick={() => {
            this.props.onClick(this.props.id);
            this.updateState(this.props.onChange());
          }}
        >
          {this.state.valor}
        </Button>
      </React.Fragment>
    );
  }
}

export default Square;
