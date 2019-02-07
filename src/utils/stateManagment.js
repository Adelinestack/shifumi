export const addPoint = winner => prevState => {
  const {
    score: { [winner]: winnerScore, ...otherPlayer },
  } = prevState;
  return {
    score: { [winner]: prevState.score[winner] + 1, ...otherPlayer },
  };
};
