import React from "react";
import Square from "../components/Square";
import "./styles/Board.css";

class Board extends React.Component {
  state = {
    turno: 0,
    matrizJuego: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    matrizGanador: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ],
    matrizPosibles: [],
    winner: ""
  };

  cambiarEstado() {
    console.log("Turno", this.state.turno);
    if (this.state.turno === 0) {
      console.log("Entra", this.state.turno);
      this.setState({
        turno: 1
      });
    } else {
      console.log("Entra", this.state.turno);
      this.setState({
        turno: 0
      });
    }
  }

  actualizarMatriz = id => {
    for (let i = 0; i < this.state.matrizJuego.length; i++) {
      for (let j = 0; j < this.state.matrizJuego[0].length; j++) {
        if (this.state.matrizJuego[i][j] === id) {
          var matriz = this.state.matrizJuego;
          if (this.state.turno === 0) {
            matriz[i][j] = "X";
            this.setState({ matrizJuego: matriz });
            console.log("Estado Cambia", this.state);
          } else {
            matriz[i][j] = "O";
            this.setState({ matrizJuego: matriz });
            console.log("Estado Cambia", this.state);
          }
        }
      }
    }
  };

  encontrarGanadorT = id => {
    var matrizG = this.state.matrizGanador;
    matrizG.filter((val, i, arr) => {
      return val[i] === id;
    });
    // var matrizR = matrizG.filter((value, index, array) => {
    //   for (let j = 0; j < 3; j++) {
    //     console.log(value);
    //     if (matrizG[index][j] === id) {
    //       // Lo tengo,
    //     }
    //   }
    //   return matrizR;
    // });
  };

  analizarMatrizJuego = id => {};

  encontrarGanador = id => {
    var ganador = this.state.matrizGanador;
    console.log("Casilla Pulsada", id);
    var listaArray = new Array(4);
    for (let i = 0; i < ganador.length; i++) {
      const element = ganador[i];
      for (let j = 0; j < element.length; j++) {
        if (element[j] === id) {
          listaArray[i] = element;
        }
        // console.log(i, element[j]);
      }
    }
    // console.log(listaArray);
  };

  enviarState = id => {
    if (this.state.turno === 0) {
      this.cambiarEstado();
      this.actualizarMatriz(id);
      // this.encontrarGanador(id);
      this.encontrarGanadorT(id);
      return "X";
    } else {
      this.cambiarEstado();
      this.actualizarMatriz(id);
      // this.encontrarGanador(id);
      this.encontrarGanadorT(id);
      return "O";
    }
  };

  render() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const items = array.map(value => {
      return (
        <div className="divKey" key={value}>
          <Square
            id={value}
            value={this.state.simbolo}
            onChange={this.enviarState}
          />
        </div>
      );
    });

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
