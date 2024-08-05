import React from "react";

export default function KeysWindows({ handleButton }) {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];

  return <div className="keysWindows">
    <div className="keys_scientific">
        {sciKeys.map((item, index) => (
            <button key={index}
            onClick={() => handleButton(item)}
            >
                {item}
            </button>
        ))}
    </div>
    <div className="line" />
    <div className="keys_basic">
        {basicKeys.map((item, index) => (
            <button key={index}
            onClick={() => handleButton(item)}
            >
                {item}
            </button>
        ))}
    </div>
  </div>;
}
