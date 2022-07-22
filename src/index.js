import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
//import reducer from './reducers/reducer'

//const store = createStore(reducer)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const formStyle = {
  color: "red",
  textAlign: "center"
}



function MyForm() {

  const [ value, setValue ] = useState("oh")

  const handleChange =  (e) => {
    let value = e.target.value
    setValue(value)
    alert({value}.toString())
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      alert("hello")
  }

  return(
    <>
    <div id="heading">
      <h3 style={{ textAlign: "center" }}>Get Who is Result</h3>
    </div>
    <form style={formStyle}>
      <label for="urlText">Enter Url: </label>
      <input type="text" id="urlText" className="urlText" name="urlText" style={{ color: "inherit"}} onChange={handleChange} />
      <input type="submit" id="submit" onClick={handleSubmit} /> 
    </form>
    </>
  )
}

root.render(
  <MyForm />
);
