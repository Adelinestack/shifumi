import { PIERRE, FEUILLE, CISEAUX } from '../utils/contantes';

export const isPlayerWin = (playerSign, computerSign) => {
  return (
    (playerSign === CISEAUX && computerSign === FEUILLE) ||
    (playerSign === FEUILLE && computerSign === PIERRE) ||
    (playerSign === PIERRE && computerSign === CISEAUX)
  );
};
