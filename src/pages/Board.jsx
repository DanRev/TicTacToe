import React from "react";
import Square from "../components/Square";
import "./styles/Board.css";
import "./styles/fonts.css";

class Board extends React.Component {
  onclick(e) {
    console.log(e);
  }

  render() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var object = new Array(9);
    return (
      <React.Fragment>
        <div className="centerContent">
          <div className="title">Tic Tac Toe</div>
          <section className="section-container">
            <div className="container">
              {array.map(value => {
                return (
                  <div className="divKey" key={value}>
                    <Square onClick={this.onclick} id={value} />
                    {console.log(document.getElementById(value))}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
