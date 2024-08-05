import React from "react";

export default function DisplayWindows({ text, result }) {
  return (
    <div className="displayWindows">
        <p className="text">{text}</p>
        <p className="result">{result}</p>
    </div>
  )
}
