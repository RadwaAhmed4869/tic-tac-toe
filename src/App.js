import { useState } from "react";

import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer() {
    setActivePlayer((preActivePlayer) => (preActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onClickSquare={handleActivePlayer}
          activeSymbol={activePlayer}
        />
      </div>
      Log
    </main>
  );
}

export default App;
