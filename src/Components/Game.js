import React, { Component } from "react";
import Board from "./Board";

export class Game extends Component {
  render() {
    return (
      <div className="game">
        {/* this board is rendered */}
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
