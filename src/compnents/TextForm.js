import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [Text,setText]= useState("");

    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
        props.alert("all the text changed to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = Text.toLocaleLowerCase();
        setText(newText);
        props.alert("all the text changed to lowercase","success");
    }
    const handleClear = ()=>{
        let newText = "";
        setText(newText);
        props.alert("all the text has been cleared","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    // new functions 
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("text copied to clipboard","success");
    }

    const handleExtraSpace = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces removed","success");
    }
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={Text} onChange={handleOnChange} style={{background:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick} >convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear} >clear</button>

        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy} >copy text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace} >remove extra space</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words, {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter somthing to preview here"}</p>
        {/* <h3>Email present</h3>
        <p>{email}</p> */}
    </div>
    </>
  )
}
