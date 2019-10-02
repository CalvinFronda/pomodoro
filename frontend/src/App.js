import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
