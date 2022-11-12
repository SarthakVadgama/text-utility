import React, { useState } from 'react'
import '../../css/index.css'
import '../../css/textUtil.css'

export default function TextUtil(props) {

  const handleClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "warning");
  }

  const handleClickLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "warning");
  }

  const handleClear = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure You want to clear the text Area !") === true) {
      let newText = ('');
      setText(newText);
      props.showAlert("Text cleared successfully", "danger");
    } else {}
  }

  const handleCopy = () => {
    let text = document.getElementById('TextArea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied successfully", "success");
  }

  const handleClickLI = () => {
    let newText = ('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
    setText(newText);
    props.showAlert("Lorem Ipsum Text added to area", "success");
  }

  const handleClickRES = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully", "success");
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter Your Text here...');
  return (
    <>
      <div className="container my-5 px-4">
        <h3>{props.heading}</h3>
        <div className="my-2">
          <textarea className={`form-control tA-${props.mode} tAb-${props.mode}`} value={text} onChange={handleChange} id="TextArea1" rows="6"></textarea>
        </div>
        <div className="row justify-content-center text-center" id="buttnsGrp">
          <div className="col-2">
            <button className='btn btn-primary' onClick={handleClickLI}>LoremIpsum Text</button>
          </div>
          <div className="col-2">
            <button disabled={text.length === 0} className='btn btn-warning' onClick={handleClickUp}>UpperCase</button>
          </div>
          <div className="col-2">
            <button disabled={text.length === 0} className='btn btn-warning' onClick={handleClickLo}>LowerCase</button>
          </div>
          <div className="col-2">
            <button disabled={text.length === 0} className='btn btn-warning' onClick={handleClickRES}>Remove Extra Spaces</button>
          </div>
          <div className="col-2">
            <button disabled={text.length === 0} className='btn btn-danger' onClick={handleClear}>Clear Area</button>
          </div>
          <div className="col-2">
            <button disabled={text.length === 0} className='btn btn-success' onClick={handleCopy}>Copy Text</button>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

