import React from 'react';
import './App.css';
import { UserContextProvider } from './context/UserContext';
import Screen from './components/Screen';
import Buttons from './components/Buttons'

function App() {
  return (
    <>
      <header>
       <h1>Calculate Me</h1>
      </header>
      <UserContextProvider>
        <main className='calculator-container'>
          <Screen/>
          <Buttons/>
        </main>
      </UserContextProvider>
    </>
  );
}

export default App;