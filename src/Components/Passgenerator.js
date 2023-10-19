import React, { useCallback, useEffect, useRef, useState } from 'react'
import './pass.css'
function Passgenerator() {
    const [password,setPassword]=useState('')
    const lengthRef=useRef()
    const includeCharacter=useRef()
    const includeLetters=useRef()
    const includeNumbers=useRef()

    const generatePassword=useCallback(()=>{
        const length=lengthRef.current.value
        const numbers='0123456789'
        const character='~`!@#$%^&*()_-{}[]()'
        const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        let characters=''
        if(includeCharacter.current.checked){
            characters+=character
        }
        if(includeLetters.current.checked){
            characters+=letters
        } 
        if(includeNumbers.current.checked){
            characters+=numbers
        }

        let generatedPassword=''
        for (let i = 0; i <length; i++) {
            const randomIndex=Math.floor(Math.random()*characters.length)
            generatedPassword+=characters[randomIndex]
            
        }
        setPassword(generatedPassword)
    },[])

    useEffect(()=>{
        generatePassword()
    },[generatePassword])
  return (
    <>
    <div className="password-generator">
      <h2>Password Generator</h2>
      <div className="input-container">
        <label>Password Length:</label>
        <input type="number" ref={lengthRef} />
      </div>
      <div className="input-container">
        <label>Include Letters:</label>
        <input type="checkbox" ref={includeLetters} />
      </div>
      <div className="input-container">
        <label>Include Numbers:</label>
        <input type="checkbox" ref={includeNumbers} />
      </div>
      <div className="input-container">
        <label>Include Characters:</label>
        <input type="checkbox" ref={includeCharacter} />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="result-container">
        <label>Generated Password:</label>
        <input type="text" value={password} readOnly/>
      </div>
</div>
    </>
  )
}

export default Passgenerator