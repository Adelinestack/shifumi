import React, { Component } from 'react';

import { SIGNES, TIMER } from '../utils/contantes';

import { isPlayerWin } from '../utils/functions';

class Gameboard extends Component {
  state = {
    computerSign: null,
    timer: null,
  };
  componentDidMount() {
    this.beginNewRound();
  }

  playerPlay(playerSign) {
    this.addPointToRoundWinner(playerSign);
    this.beginNewRound();
  }

  beginNewRound = () => {
    this.computerSignSelection();
    this.timerManage();
  };

  timerManage = () => {
    const endTime = Date.now() + TIMER;

    clearInterval(this.timer);

    this.timer = setInterval(() => {
      const now = Date.now();
      const timeLeft = ((endTime - now) / 1000).toFixed(1);
      if (timeLeft >= 0) {
        this.setState({
          timer: timeLeft,
        });
      } else {
        clearInterval(this.timer);
        this.props.updateScore('computer');
        this.beginNewRound();
      }
    }, 100);
  };

  computerSignSelection = () => {
    const computerSign = SIGNES[Math.floor(Math.random() * SIGNES.length)];
    this.setState({
      computerSign,
    });
  };

  addPointToRoundWinner = playerSign => {
    const { computerSign } = this.state;
    const { updateScore } = this.props;
    playerSign !== computerSign && isPlayerWin(playerSign, computerSign)
      ? updateScore('player')
      : updateScore('computer');
  };

  endGame = () => {
    clearInterval(this.timer);
    this.props.endGame();
  };

  render() {
    const { score } = this.props;
    const signesBtn = SIGNES.map(signe => (
      <button key={signe} onClick={this.playerPlay.bind(this, signe)}>
        {signe}
      </button>
    ));
    return (
      <div>
        <div>{signesBtn}</div>
        <p>Time left : {Math.abs(this.state.timer)}</p>
        <p>
          You : {score.player} / Computer : {score.computer}
        </p>
        <button onClick={this.endGame}>Stop</button>
      </div>
    );
  }
}

export default Gameboard;
