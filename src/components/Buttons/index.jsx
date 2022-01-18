import React, { useContext } from 'react';
import './styles.css';
import UserContext from '../../context/UserContext' 

export default function Buttons (){

  const {userNumbers, setUserNumbers} = useContext(UserContext)

  const buttons = ['+', '-', '*', '/', 7,8,9,4,5,6,1,2,3,0,'.']

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

  const handleExponential = () => {
    setUserNumbers(userNumbers + '**')
  };
  
  return(
    <section className='keyboard-numbers'>
      {
        buttons.map((num, index) => {
          return(
              <button className='key' key={index} onClick={handleButtonClick(num)}><i>{num}</i></button>
          )
        })
      }
      <button className='key' onClick={handleExponential}><i>Exp</i></button>
      <button className='key delete-key' onClick={handlePartialDelete}><i>Del</i></button>
      <button className='key restart-key' onClick={handleDelete}><i>Ac</i></button>
      <button className='key equal-key' onClick={handleEqual}><i>=</i></button>
    </section>
  )
}