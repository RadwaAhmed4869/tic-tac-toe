import { useState } from "react";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, SetGameBoard] = useState(initGameBoard);

  function handleClick(row, col) {
    SetGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];     //Create (deep) copy
      updatedGameBoard[row][col] = "X";
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex}>
                <button onClick={() => handleClick(rowIndex, symbolIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
