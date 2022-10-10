import React from 'react'
import './Calc.css'
import { useState } from 'react';


const App = (event) => {

    const [result, setResult] = useState("");

    const clickHandler=(event)=>{

        setResult(result.concat(event.target.value))
    }
    
    const cleareDisplay=()=>{
        setResult("");
    }

    const calculate=()=>{
        setResult(eval(result).toString())
    }

const inputValues = ["9","8","7","6","5","4","3","2","1","0",".","+","-","*","/","%",]



  return (
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' value={result}></input>
      
      
{
  inputValues.map((item,inex)=>{
    return(
   <input type="button" value={item} className='button' onClick={clickHandler}></input>

    )
  })

}


      {/* <input type="button" value='9' className='button' onClick={clickHandler}></input>
      <input type="button" value='8' className='button' onClick={clickHandler}></input>
      <input type="button" value='7' className='button' onClick={clickHandler}></input>
      <input type="button" value='6' className='button' onClick={clickHandler}></input>
      <input type="button" value='5' className='button' onClick={clickHandler}></input>
      <input type="button" value='4' className='button' onClick={clickHandler}></input>
      <input type="button" value='3' className='button' onClick={clickHandler}></input>
      <input type="button" value='2' className='button' onClick={clickHandler}></input>
      <input type="button" value='1' className='button' onClick={clickHandler}></input>
      <input type="button" value='0' className='button' onClick={clickHandler}></input>
      <input type="button" value='.' className='button' onClick={clickHandler}></input>
      <input type="button" value='+' className='button' onClick={clickHandler}></input>
      <input type="button" value='-' className='button' onClick={clickHandler}></input>
      <input type="button" value='*' className='button' onClick={clickHandler}></input>
      <input type="button" value='/' className='button' onClick={clickHandler}></input>
      <input type="button" value='%' className='button' onClick={clickHandler}></input> */}
      <input type="button" value='Clear' className='button button1' onClick={cleareDisplay}></input>
      <input type="button" value='=' className='button button1' onClick={calculate}></input>
    </div>
  );
}

export default App;

