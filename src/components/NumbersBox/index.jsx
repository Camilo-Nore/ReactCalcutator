import React, { useState } from 'react';
import Screen from '../Screen'
import './styles.css'

export default function NumbersBox () {

  const [userNumbers, setUserNumbers] = useState('')

  const buttons = ['+', '-', '*', '/', 7,8,9,4,5,6,1,2,3,0]

  const handleClick = (num) => (ev) => {
    setUserNumbers(userNumbers + num.toString())
  };
  const handleEqual = () => {
    setUserNumbers(eval(userNumbers))
  };
  const handleDelete = () => {
    setUserNumbers('')
  };
  const handlePartialDelete = () => {
    setUserNumbers(userNumbers.toString().slice(0,-1))
  };


  return (
    <>
      <Screen userNumbers={userNumbers}/>
      <section className='keyboard-numbers'>
      {
        buttons.map((num, index) => {
          return(
              <button className='key' key={index} onClick={handleClick(num)}><i>{num}</i></button>
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