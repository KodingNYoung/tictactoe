import React, { Component } from 'react'
import Board from './Board'

export class Game extends Component {
    render() {
        return (
          <div className="game">
            {/* this board is rendered */}
            <div className="game-board">
              <Board />
            </div>

            {/* game info */}
            <div className="game-info">
              <div>status</div>
              <ol>todo</ol>
            </div>
          </div>
        );
    }
}

export default Game
