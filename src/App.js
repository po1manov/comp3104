import logo from './logo.svg';
import './App.css';

import React, { Fragment } from 'react';
import Student from  "./components/student/Student";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <React.Fragment>
            <Student />
          </React.Fragment>
        </p>
      </header>
    </div>
  );
}

export default App;

