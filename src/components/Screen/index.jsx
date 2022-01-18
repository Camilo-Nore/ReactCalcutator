import React, {useState} from 'react';
import './styles.css';

export default function Screen ({userNumbers, setUserNumbers}){

  const handleEqual = () => {
    try{
      setUserNumbers(eval(userNumbers))
    }catch{
      alert('Check your equation')
    }
  };

  const handleChange = (e) =>{
    const equation = e.target.value
    const regex = /^(\d*[*-/]?\d*){1,}$/
    regex.test(equation) && setUserNumbers(equation)
  }

  const handlePressedKey = (e) =>{
    e.key == 'Enter' && handleEqual()
  }

  const preview = (equation) => {
    try{
      return eval(equation)
    }catch{}
  }

  return(
    <div className='screen'>
      <input type="text" autoFocus className='screen-input' onChange={handleChange} value={userNumbers || ''} onKeyPress={handlePressedKey}/>
      <p className='preview-result'>{preview(userNumbers)}</p>
    </div>
  )
}