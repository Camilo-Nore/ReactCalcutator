import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <header>
       <h1>Calculate Me</h1>
      </header>
      <main className='calculator-container'>
        <Calculator/>
      </main>
    </>
  );
}

export default App;