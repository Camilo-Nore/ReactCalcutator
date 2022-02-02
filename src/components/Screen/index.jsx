import React, {useContext} from 'react';
import './styles.css';
import UserContext from '../../context/UserContext' 

export default function Screen (){

  const {userNumbers, setUserNumbers} = useContext(UserContext)

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
      setUserNumbers('Syntax Error')
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