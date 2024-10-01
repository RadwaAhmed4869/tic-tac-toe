import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="Player 1" symbol="X" />
          <Player initName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  );
}

export default App;
