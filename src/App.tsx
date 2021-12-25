import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show, checkWin } from "./helpers/helpers";

import "./App.css";

let selectedWord = "wanderrucksack";

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const input = useRef(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (playable) {
      const letter = event.target.value;
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  };

  useEffect(() => {
    focus();
  });

  function focus() {
    if (input.current) {
      (input.current as HTMLInputElement).focus();
    }
  }

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
  }

  return (
    <>
      <input
        autoFocus
        ref={input}
        value={""}
        className="input"
        onChange={handleInput}
      />
      <Header />
      <div className="game-container" onClick={focus}>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
