import React from 'react';
import './styles.css'

export default function Screen ({userNumbers}) {
  return (
    <input type="text" value={userNumbers} />
  )
}