import React, {useState} from "react";
import "./calculators.css";

function Calculators(props) {
  const [input, setInput] = useState("");
  // const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  function clear() {
    setInput("");
  }

  
   const calculate=()=>{
    setInput(eval(input.toString()))
   }
 
  return (
    <>
  

   
 
    <div className="main_div">
    
      
      <div className="center_div">
      <h1>{props.title}</h1>
        <div className="row">
          <input placeholder="0" class="input" type="text" value={input} />
        </div>
        <div className="row">
          <button onClick={clear} class="button">
            C
          </button>
          <button onClick={() => handleClick("%")} class="button">
            %
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("7")} class="button">
            7
          </button>

          <button onClick={() => handleClick("8")} class="button">
            8
          </button>
          <button onClick={() => handleClick("9")} class="button">
            9
          </button>
          <button onClick={() => handleClick("*")} class="button">
            *
          </button>
        </div>
        <div class="row">
          <button onClick={() => handleClick("4")} class="button">
            4
          </button>
          <button onClick={() => handleClick("5")} class="button">
            5
          </button>
          <button onClick={() => handleClick("6")} class="button">
            6
          </button>
          <button onClick={() => handleClick("/")} class="button">
            /
          </button>
        </div>
        <div class="row">
          <button onClick={() => handleClick("1")} class="button">
            1
          </button>
          <button onClick={() => handleClick("2")} class="button">
            2
          </button>
          <button onClick={() => handleClick("3")} class="button">
            3
          </button>
          <button onClick={() => handleClick("+")} class="button">
            +
          </button>
        </div>
        <div class="row">
          <button onClick={() => handleClick("0")} class="button">
            0
          </button>
          <button onClick={() => handleClick(".")} class="button">
            .
          </button>
          <button onClick={() => calculate()} class="button">
            =
          </button>
          <button onClick={() => handleClick("-")} class="button">
            -
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calculators;
