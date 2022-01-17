import React, { useState } from 'react';
import Buttons from '../Buttons';
import Screen from '../Screen';

export default function Calculator () {
  const [userNumbers, setUserNumbers] = useState('')

  return (
    <>
      <Screen userNumbers={userNumbers} setUserNumbers={setUserNumbers}/>
      <Buttons userNumbers={userNumbers} setUserNumbers={setUserNumbers}/>
    </>
  )
}