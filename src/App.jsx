import React from 'react';
import './App.css';
import NumbersBox from './components/NumbersBox';

function App() {
  return (
    <>
      <header>
       <h1>Calculate Me</h1>
      </header>
      <main className='calculator-container'>
      <NumbersBox/>
      </main>
    </>
  );
}

export default App;