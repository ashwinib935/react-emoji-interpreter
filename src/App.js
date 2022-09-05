import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "😑": "annoyance",
    "😎": "Face with sunglasses",
    "🎁": "Wrapped gift",
    "🎢": "Roller Coaster",
    "🦘": "Kangaroo",
    "🧠": "Brain"
  };

  const [meaning, setmeaning] = useState(" ");

  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have in our database";
    }

    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    console.log(meaning);
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Emoji Interpreter</h1>
        <input onChange={emojiInputHandler} />

        <h2>{meaning}</h2>
        <h3>Emojis we know</h3>
        {emojisWeKnow.map((emoji) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
