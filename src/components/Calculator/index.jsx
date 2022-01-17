import React, { useState } from 'react';
import './styles.css'

export default function Calculator () {

  const [userNumbers, setUserNumbers] = useState('')

  const buttons = ['+', '-', '*', '/', 7,8,9,4,5,6,1,2,3,0]

  const handleButtonClick = (num) => (ev) => {
    setUserNumbers(userNumbers + num.toString())
  };
  const handleEqual = () => {
    try{
      setUserNumbers(eval(userNumbers))
    }catch{
      alert('Check your equation')
    }
  };
  const handleDelete = () => {
    setUserNumbers('')
  };
  const handlePartialDelete = () => {
    setUserNumbers(userNumbers.toString().slice(0,-1))
  };
  const handleChange = (e) =>{
    setUserNumbers(e.target.value)
  }
  const handlePressedKey = (e) =>{
    e.key == 'Enter' && handleEqual()
  }


  return (
    <>
      <input type="text" autoFocus className='screen' onChange={handleChange} value={userNumbers || ''} onKeyPress={handlePressedKey}/>
      <section className='keyboard-numbers'>
      {
        buttons.map((num, index) => {
          return(
              <button className='key' key={index} onClick={handleButtonClick(num)}><i>{num}</i></button>
          )
        })
      }
      <button className='key delete-key' onClick={handlePartialDelete}><i>Del</i></button>
      <button className='key restart-key' onClick={handleDelete}><i>Ac</i></button>
      <button className='key equal-key' onClick={handleEqual}><i>=</i></button>
      </section>
    </>
  )
}