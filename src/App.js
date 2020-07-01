import React from 'react';
import './App.css';
import Routes from './Routes';
import { Header } from './components/';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App; 