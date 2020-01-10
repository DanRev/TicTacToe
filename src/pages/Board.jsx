import React from "react";
import Square from "../components/Square";
import "./styles/Board.css";
// import imageX from "../images/x.png";
// import imageO from "../images/o.png";

class Board extends React.Component {
  state = {
    turno: 0,
    matrizJuego: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    number: -1
  };

  cambiarEstado() {
    console.log("Turno", this.state.turno);
    if (this.state.turno === 0) {
      console.log("Entre", this.state.turno);
      this.setState({
        turno: 1
      });
    } else {
      this.setState({
        turno: 0
      });
    }
  }

  actualizarMatriz = () => {
    // console.log(this.state.matrizJuego);
  };

  enviarState = () => {
    if (this.state.turno === 0) {
      this.cambiarEstado();
      this.actualizarMatriz();
      return "X";
    } else {
      this.cambiarEstado();
      return "O";
    }
  };

  render() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const items = array.map(value => {
      return (
        <div className="divKey" key={value}>
          <Square
            onClick={onclick}
            id={value}
            value={this.state.simbolo}
            onChange={this.enviarState}
          />
        </div>
      );
    });

    function onclick(e) {
      console.log(e);
    }

    return (
      <React.Fragment>
        <div className="centerContent">
          <div className="title">Tic Tac Toe</div>
          <section className="section-container">
            <div className="container">{items}</div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
