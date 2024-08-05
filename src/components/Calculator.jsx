import React from "react";
import { useState } from "react";

import DisplayWindows from "./DisplayWindows";
import KeysWindows from "./KeysWindows";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("0");
  const sciFunc = {
    sin: "Math.sin",
    cos: "Math.cos",
    tan: "Math.tan",
    ln: "Math.log",
    log: "Math.log10",
    π: "Math.PI",
    e: "Math.E",
    "^": "**",
    "√": "Math.sqrt",
  };

  function calcResult() {
    if (expression.length !== 0) {
      try {
        let compute = eval(expression);
        setResult(compute);
      } catch (error) {
        setResult("ERROR");
      }
    }
  }

  function extractLastNum(exp) {
    const num = exp.match(/\d+/g);
    return num ? num[num.length - 1] : null;
  }

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }


  function handleButton(value) {
    if (value === "AC") {
      setExpression("");
      setText("");
      setResult("0");
    } else if (value === "DEL") {
      setText(text.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      calcResult();
    } else if (sciFunc.hasOwnProperty(value)) {
      setText(expression + value);
      setExpression(expression + sciFunc[value]);
    } else if (value === "!") {
      const lastNum = extractLastNum(expression);
      if (lastNum !== null) {
        const num = parseFloat(lastNum);
        setText(text + value);
        setExpression(expression.replace(lastNum, factorial(num)));
      }
    } else {
      setExpression(expression + value);
      setText(text + value);
    }
  }

  return (
    <div className="calculator">
      <DisplayWindows text={text} result={result} />
      <KeysWindows handleButton={handleButton} />
    </div>
  );
}
