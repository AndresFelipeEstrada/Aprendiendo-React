import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (newBoard) => {
  // revisamos las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return newBoard[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  /*
  revisamos si hay un empate
  si no hay mas espacios vacios en el tablero
  */
  return newBoard.every((square) => square !== null)
}
