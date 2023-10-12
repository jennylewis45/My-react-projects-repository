import React,{useState,useContext,createContext} from 'react'
import './calculator.css'
const colorContext=createContext()

function Calculator(props) {
 
  const[colors1,setColors1]=useState("orange")
  const[colors2,setColors2]=useState("blue")
  const[colors3,setColors3]=useState("red")
  const[colors4,setColors4]=useState("white")
  const[colors5,setColors5]=useState("grey")
  const[colors6,setColors6]=useState("black")
  const[colors7,setColors7]=useState("green")
  const[colors8,setColors8]=useState("brown")
  const[colors9,setColors9]=useState("purple")
  const[colors10,setColors10]=useState("yellow")
function handlechange1(){
  document.body.style.backgroundColor="orange"
}

function handlechange2(){
  document.body.style.backgroundColor="blue"
}
function handlechange3(){
  document.body.style.backgroundColor="red"
}
function handlechange4(){
  document.body.style.backgroundColor="white"
}
function handlechange5(){
  document.body.style.backgroundColor="grey"
}
function handlechange6(){
  document.body.style.backgroundColor="black"
}
function handlechange7(){
  document.body.style.backgroundColor="green"
}
function handlechange8(){
  document.body.style.backgroundColor="brown"
}
function handlechange9(){
  document.body.style.backgroundColor="purple"
}
function handlechange10(){
  document.body.style.backgroundColor="yellow"
}

  return (
    
    <>
    <h2 className='he'>{props.title}</h2>
    <colorContext.Provider value={[colors1]}>
      <div className="container">
    <button  onClick={handlechange1} className='her1'>{`${colors1}`}</button>
    <button onClick={handlechange2} className='her2'>{`${colors2}`}</button>
    <button onClick={handlechange3} className='her3'>{`${colors3}`}</button>
    <button onClick={handlechange4} className='her4'>{`${colors4}`}</button>
    <button onClick={handlechange5} className='her5'>{`${colors5}`}</button>
    <button onClick={handlechange6} className='her6'>{`${colors6}`}</button>
    <button onClick={handlechange7} className='her7'>{`${colors7}`}</button>
    <button onClick={handlechange8} className='her8'>{`${colors8}`}</button>
    <button onClick={handlechange9} className='her9'>{`${colors9}`}</button>
    <button onClick={handlechange10} className='her10'>{`${colors10}`}</button>
    </div>
    </colorContext.Provider>
   
    </>
  )
}

export default Calculator;

// import React, { useState } from 'react';
// import './calculator.css';

// function Calculator() {
//   const [colors1, setColors1] = useState("orange");

//   function handlechange() {
//     document.body.style.backgroundColor = "blue";
//   }

//   return (
//     <div className="container">
//       <button onClick={handlechange} className='her1'>{`${colors1}`}</button>
//     </div>
//   )
// }

// export default Calculator;
