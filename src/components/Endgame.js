import React from 'react';

const Endgame = ({ playGame, score }) => {
  const winnerAnnouncement =
    score.player === score.computer
      ? 'Nobody win'
      : score.player > score.computer
      ? 'You win'
      : 'Computer win';

  return (
    <div>
      <p>{winnerAnnouncement}</p>
      <button onClick={playGame}>Play again</button>
    </div>
  );
};

export default Endgame;
