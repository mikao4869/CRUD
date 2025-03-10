import React from {React,useState};

function Main() {
const [write,setwrite]=useState("");

  function handleclick(){
    console.log("write")
  }

  return (
    <>
    <input placeholder='write' value={write}required></input>
    <button onClick={handleclick}>submit</button>
    </>
  )
}

export default Main