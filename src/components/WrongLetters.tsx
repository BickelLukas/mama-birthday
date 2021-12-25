import React from "react";

interface Props {
  wrongLetters: string[];
}

const WrongLetters = ({ wrongLetters }: Props) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Falsch</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null as any
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
