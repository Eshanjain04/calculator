import React from 'react'
import { useState } from 'react';
import "./calculator.css";
const Calculator = () => {
    const [str,setStr] = useState("");
    const[displayed , setdisplayed] = useState(false);
    var handleClick = (e)=>{
        if(e.target.value==="="){
            var ans = eval(str);
            setStr(ans);
            setdisplayed(true);
        }
        else{
            if(displayed===true){
                setStr(e.target.value);
                setdisplayed(false);
            }
            else{
                setStr(str+e.target.value);
            }
            
        }
        
    }
  return (
    <div className='container'>
        <div className='heading'>
            <h1>Calculator</h1>
        </div>
        <div className='grid-container'>
            <input className='display' value={str}></input>
            <button onClick={()=>{
                setStr("");
            }} className='c btn-style' value={""}>C</button>
            <button onClick={e=>handleClick(e,"value")} className='1 btn-style' value={1}>1</button>
            <button onClick={e=>handleClick(e,"value")} className='2 btn-style' value={2}>2</button>
            <button onClick={e=>handleClick(e,"value")} className='3 btn-style' value={3}>3</button>
            <button onClick={e=>handleClick(e,"value")} className='/ btn-style' value={"/"} >/</button>
            <button onClick={e=>handleClick(e,"value")} className='4 btn-style' value={4}>4</button>
            <button onClick={e=>handleClick(e,"value")} className='5 btn-style' value={5}>5</button>
            <button onClick={e=>handleClick(e,"value")} className='6 btn-style' value={6}>6</button>
            <button onClick={e=>handleClick(e,"value")} className='- btn-style' value={"-"} >-</button>
            <button onClick={e=>handleClick(e,"value")} className='7 btn-style' value={7}>7</button>
            <button onClick={e=>handleClick(e,"value")} className='8 btn-style' value={8}>8</button>
            <button onClick={e=>handleClick(e,"value")} className='9 btn-style' value={9}>9</button>
            <button onClick={e=>handleClick(e,"value")} className='+ btn-style' value={"+"}>+</button>
            <button onClick={e=>handleClick(e,"value")} className='. btn-style' value={"."} >.</button>
            <button onClick={e=>handleClick(e,"value")} className='0 btn-style' value={0}>0</button>
            <button onClick={e=>handleClick(e,"value")} className='= btn-style' value={"="}>=</button>
            <button onClick={e=>handleClick(e,"value")} className='* btn-style' value={"*"} >*</button>
        </div>
    </div>
  )
}

export default Calculator