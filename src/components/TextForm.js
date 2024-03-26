import React, { useState } from "react";

export default function TextForm(props) {

   

    const [text, setText] = useState('Enter your text');

    const handleOnChange = (event) => {
        console.log("Handle On Change");
        setText(event.target.value)
    }

    const handleUpClick = () => {
        console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        console.log("Lowercase Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCancelClick = () => {
        console.log("Cancel Clicked");
        let newText = "";
        setText(newText);
    }

  return (
    <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <div className="container">
        <div className="mb-3">
          <h1 className="my-3">{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{color: props.mode === 'dark' ? 'white' : 'black', background: props.mode === 'dark' ? 'gray' : 'white'}}
          ></textarea>
          <button className="btn btn-primary my-3" type="submit" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-primary my-3 mx-2" type="submit" onClick={handleDownClick}>Lowercase</button>
          <button className="btn btn-primary my-3" type="submit" onClick={handleCancelClick}>Cancel</button>
        </div>

      </div>
      <div className="container my-3">
            {/* Counting number of words and characters */}
            <h1>Your text summary</h1>
            <p>There are {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * (text.split(' ').length)} minutes to read</p>
        </div>
    </div>
  );
}
