import { useState } from "react";

export default function Player({ initName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initName);

  function handleEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value)
  }

  let playerNameField = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameField = <input type="text" required value={playerName} onChange={handleChangeName}></input>;
  }

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
