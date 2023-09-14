import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpperCaseOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>ENTER THE TEXT BRUHH !!</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpperCaseOnClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={lowerCaseOnClick}>
          Convert To lowerCase
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      </div>
    </>
  );
}
