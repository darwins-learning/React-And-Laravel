import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const formStyle = {
  color: "red"
}

function MyForm() {

  return(
    <form style={formStyle}>
      <label for="urlText">Enter Url: </label>
      <input type="text" id="urlText" className="urlText" name="urlText" style={{ color: "inherit"}}/> 
    </form>
  )
}

root.render(
  <MyForm />
);
