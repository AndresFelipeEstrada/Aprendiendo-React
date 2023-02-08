import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { turnos } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App () {
  const [board, setBoard] = useState(() => {
    // si hay un partida guardada
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turnos.x
  })
  // null es que no hay ganador,false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turnos.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === turnos.x ? turnos.o : turnos.x
    setTurn(newTurn)
    // guardar partidad
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turno', JSON.stringify(turn))

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // EMPATE
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='turn'>
        <Square isSelected={turn === turnos.x}>{turnos.x}</Square>
        <Square isSelected={turn === turnos.o}>{turnos.o}</Square>
      </section>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <button onClick={resetGame}>Reiniciar juego</button>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
