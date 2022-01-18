import React, {useState} from 'react';
import './styles.css';

export default function Screen ({userNumbers, setUserNumbers}){

  const handleChange = (e) =>{
    const equation = e.target.value
    const regex = /^(\d*[*-/]?\d*){1,}$/
    regex.test(equation) && setUserNumbers(equation)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      setUserNumbers(eval(userNumbers))
    }catch{
      alert('Check your equation')
    }
  }

  const preview = (equation) => {
    try{
      return eval(equation)
    }catch{}
  }

  return(
    <div className='screen'>
      <form onSubmit={handleSubmit}>
        <input type="text" autoFocus className='screen-input' onChange={handleChange} value={userNumbers || ''}/>
      </form>
      <p className='preview-result'>{preview(userNumbers)}</p>
    </div>
  )
}