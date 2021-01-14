import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  state = {
    // a array with 9 spaces filled with null
    value: Array(9).fill(null),
    xIsNext: true,
    gameOver: false,
    winner: null,
  };
  winCellsCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  setWinner = (winner) => {
    this.setState({
      winner: winner || null,
    });
  };
  getWinningCell = (valueArray) => {
    let winningCell = undefined;

    this.winCellsCombo.forEach((cellCombo) => {
      const cellComboValues = cellCombo.map((cell) => {
        return valueArray[cell];
      });

      if (
        cellComboValues[0] !== null &&
        cellComboValues[0] === cellComboValues[1] &&
        cellComboValues[0] === cellComboValues[2]
      ) {
        winningCell = cellComboValues;
      }
    });

    return winningCell;
  };
  isGameOver = (valueArray) => {
    if (this.getWinningCell(valueArray) || !this.isSpaceAvailable(valueArray)) {
      this.setWinner(this.getWinningCell(valueArray)[0]);
      return true;
    }
    return false;
  };
  isSpaceAvailable = (valueArray) => {
    let isCellSpaced = false;
    valueArray.forEach((value) => {
      if (value === null) {
        isCellSpaced = true;
      }
    });
    return isCellSpaced;
  };
  cellHasValue = (cellsArray, cell_number) => {
    if (cellsArray[cell_number] !== null) {
      return true;
    }
    return false;
  };
  updateState = (cell_number) => {
    // clone the array
    const newCellArray = [...this.state.value];

    // check if the cell has a value already
    if (this.cellHasValue(newCellArray, cell_number)) return;

    // adjust
    newCellArray[cell_number] = this.state.xIsNext ? "X" : "O";

    this.setState({
      value: newCellArray,
      xIsNext: !this.state.xIsNext,
    });

    // check if the game is over
    if (this.isGameOver(newCellArray)) {
      this.setState({
        gameOver: true,
      });
    }
  };
  resetGame = () => {
    this.setState({
      // a array with 9 spaces filled with null
      value: Array(9).fill(null),
      xIsNext: true,
      gameOver: false,
      winner: null,
    });
  };
  renderCell = (cell_number) => {
    return (
      <Cell
        value={this.state.value[cell_number]}
        showStatus={() => this.updateState(cell_number)}
        disabled={this.state.gameOver}
      />
    );
  };

  render() {
    const status = `Next player: ${this.state.xIsNext ? "X" : "O"} `;

    return (
      <div>
        <div className="status">{status}</div>
        {this.state.gameOver && (
          <div className="gameover-text">
            <p>
              <span>Gameover!!!</span>
              {this.state.winner && (
                <span>Player {this.state.winner} wins</span>
              )}
            </p>
            <button onClick={this.resetGame}>reset game</button>
          </div>
        )}
        <div className="board">
          <div className="board-row">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
          </div>
          <div className="board-row">
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
          </div>
          <div className="board-row">
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
