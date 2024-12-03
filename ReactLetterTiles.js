import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const style = {
  letterContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
    gap: "10px",
    marginBottom: "10px",
  },
  letter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    background: "#c9e4ed",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    border: "1px solid #ccc",
  },
};

function Tile(props) {
  return (
    <button
      style={style.letter}
      onClick={() => props.handleClick(props.letter)}
    >
      {props.letter}
    </button>
  );
}

function Application(props) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const [varOcg, setVarOcg] = useState("");

  const handleLetterClick = (letter) => {
    let updatedString = varOcg + letter;

    // Replace 3 or more consecutive letters with "_"
    let varFiltersCg = updatedString.replace(/(.)\1{2,}/g, "_");
    setVarOcg(varFiltersCg);
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {alphabet.map((letter, index) => (
          <Tile key={index} letter={letter} handleClick={handleLetterClick} />
        ))}
      </aside>
      <div id="outputString">{varOcg}</div>
    </section>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Application />);
