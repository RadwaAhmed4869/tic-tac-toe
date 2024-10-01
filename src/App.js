import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="Player 1" symbol="X" />
          <Player initName="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
