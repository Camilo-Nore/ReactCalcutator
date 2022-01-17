import React from 'react';
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
    setUserNumbers(e.target.value)
  }
  const handlePressedKey = (e) =>{
    e.key == 'Enter' && handleEqual()
  }
  return(
    <input type="text" autoFocus className='screen' onChange={handleChange} value={userNumbers || ''} onKeyPress={handlePressedKey}/>
  )
}