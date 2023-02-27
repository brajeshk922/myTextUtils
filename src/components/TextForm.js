import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const upperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert(" converted into UpperCase!","success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert(" converted into LowerCase!","success");
  };
  const capitalize = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    settext(newText.join(" "));
    props.showAlert(" capitalized!","success");
  };
  const copy =()=>{
    let text = document.getElementById("textarea")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" copy to clipboard!","success");
  }
  const extraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert(" remove extra space!","success");
  }
  const clear = () => {
    settext("");
  };

  return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="my-5">
        <h2>TextArea for analyze</h2>
        <textarea
          style={{backgroundColor:props.mode==='dark'?'rgb(4 39 67)':'white',color:props.mode==='dark'?'white':'black'}}
          className="form-control"
          id="textarea"
          value={text}
          onChange={handleOnChange}
          placeholder="enter text here....."
          rows="8"
        ></textarea>
        <button disabled = {text.length===0} className="btn btn-primary my-1" onClick={upperCase}>
          Change to UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={lowerCase}>
          Change to LowerCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={capitalize}>
          Capitalize text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={copy}>
          Copy text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={extraSpace}>
          Remove Extra Space
        </button>
        <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={clear}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter(element => {return element.length!==0}).length} words and {text.split(/\s+/).join(" ").length} characters
        </p>
        <p>{0.008 * text.split(" ").filter(element => {return element.length!==0}).length} Minutes to read</p>
      </div>
      <div className="container">
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}
