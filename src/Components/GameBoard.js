const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onClickSquare, turns }) {
  // const [gameBoard, SetGameBoard] = useState(initGameBoard);

  // function handleClick(row, col) {
  //   SetGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ]; //Create (deep) copy
  //     updatedGameBoard[row][col] = activeSymbol;
  //     return updatedGameBoard;
  //   });

  //   onClickSquare();
  // }

  let gameBoard = initGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex}>
                <button onClick={() => onClickSquare(rowIndex, symbolIndex)}>
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
