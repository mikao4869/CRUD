import React, { useState } from 'react';

function Main() {
const [write,setwrite]=useState("");

  function handleInput(event){
    const value=event.target.value;
    setwrite(value);
  }

  function handleSubmit(){
    value.innerText
  }


  return (
    <>
      <input placeholder='write' onChange={handleInput} value={write} required></input>
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default Main