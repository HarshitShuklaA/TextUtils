import React,{useState} from 'react'

function TextArea(props) {
  const [textval, setTextval] = useState("This is text")
  function ToUp(){
    let newTextval = textval.toUpperCase()
    setTextval(newTextval);
  }
  function ToLow(){
    let newTextval = textval.toLowerCase()
    setTextval(newTextval);
  }

  function ClearText(){
    let newTextval = '';
    setTextval(newTextval)
  }

  const CopyText = () => {
    let newTextval = document.getElementById("myBox")
    newTextval.select()
    navigator.clipboard.writeText(newTextval.value)
  }

  const RemoveExtraSpaces = () => {
    let newTextval = textval.split(/[ ]+/)
    setTextval(newTextval.join(" "))
  }


  function onc(e){
    console.log("Changed")
    setTextval(e.target.value)
  }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" id="myBox" rows="10" value={textval} onChange={onc}></textarea>
            <br/>
            <button className='btn btn-primary mx-3' onClick={ToUp}>Covert To Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={ToLow}>Covert To Lowercase</button>
            <button className='btn btn-primary mx-3' onClick={ClearText}>Clear Text</button>
            <button className='btn btn-primary mx-3' onClick={CopyText}>Copy Text</button>
            <button className='btn btn-primary mx-3' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2">
          <h1>Your Text Summary</h1>
          <p>Your Text has {textval.split(" ").length} words and {textval.length} characters</p>
          <p>{0.008 * textval.split(" ").length} Minutes to read</p>
          <h1>Preview</h1>
          <p>{textval}</p>
        </div>

    </div>
  )
}

export default TextArea