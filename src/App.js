import React, { Component } from 'react';
import './App.css';

import { BEGIN, PLAY, END } from './utils/contantes';

import Begin from './components/Begin';
import Gameboard from './components/Gameboard';
import Endgame from './components/Endgame';

import { addPoint } from './utils/stateManagment';
class App extends Component {
  state = {
    gameState: BEGIN,
    score: null,
  };

  playGame = () => {
    this.setState({
      gameState: PLAY,
      score: { player: 0, computer: 0 },
    });
  };

  endGame = () => {
    this.setState({
      gameState: END,
    });
  };

  updateScore = winner => {
    this.setState(addPoint(winner));
  };

  render() {
    const gameStateComponents = {
      BEGIN: <Begin playGame={this.playGame.bind(this)} />,
      PLAY: (
        <Gameboard
          endGame={this.endGame.bind(this)}
          updateScore={this.updateScore.bind(this)}
          score={this.state.score}
        />
      ),
      END: (
        <Endgame playGame={this.playGame.bind(this)} score={this.state.score} />
      ),
    };
    return (
      <div className="App">{gameStateComponents[this.state.gameState]}</div>
    );
  }
}

export default App;
