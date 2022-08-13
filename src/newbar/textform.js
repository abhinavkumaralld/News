import React, { useState } from "react";

export default function Hey(props) {
  const [text, textfun] = useState("it is default text");
  const changer = (event) => {
    textfun(event.target.value);
  };
  const clicker = () => {
    var tmp = text.toUpperCase();
    textfun(tmp);
  };
  const bevkoofi = () => {
    textfun("Abe Gadhe");
  };
  return (
    <>
      <div className="m-8">
        <div>
          <div className="mb-8">
            <h1
              className={`h2 text-${
                props.modee === "light" ? "#165ea6" : "light"
              }`}
            >
              Enter inputs
            </h1>
            <textarea
              onChange={changer}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
            ></textarea>
            <br />
            <button
              type="button"
              className={`btn btn-${
                props.modee === "light" ? "primary" : "light"
              } mb-8`}
              onClick={clicker}
            >
              ClickToUp
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.modee === "light" ? "primary" : "light"
              } mx-2`}
              onClick={bevkoofi}
            >
              Clear
            </button>
          </div>
        </div>
        <div>
          <h3
            className={`h2 text-${
              props.modee === "light" ? "#165ea6" : "light"
            }`}
          >
            Summary
          </h3>
          <div
            className={`text-${props.modee === "light" ? "#165ea6" : "light"}`}
          >
            {text.split(" ").length} words and {text.length} characters{" "}
          </div>
        </div>
      </div>
    </>
  );
}
