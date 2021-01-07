import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserTable />
    </div>
  );
}

export default App;
