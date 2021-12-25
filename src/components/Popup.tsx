import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

interface Props {
  wrongLetters: string[];
  correctLetters: string[];
  selectedWord: string;
  setPlayable: (val: boolean) => void;
  playAgain: () => void;
}

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}: Props) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage =
      "Gratuliere! You bekommst von uns einen neuen Wanderrucksack! 😃";
    finalMessageRevealWord = `Alles Gute von Moritz und Lukas!`;
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Leider Verloren. 😕";
    finalMessageRevealWord = `Probiere es nochmal`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Nochmal Spielen</button>
      </div>
    </div>
  );
};

export default Popup;
