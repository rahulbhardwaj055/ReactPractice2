import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component{
  return (
    <div className="App">
      <h1>Hi This is testing</h1>
        <button>Switch User</button>
      <Person name='Vansh' age='24'/>
      <Person name='Rahul' age='27'/>
      <Person name='chiku' age='1000' >what you want to say ?</Person>
    </div>
  );
}

export default App;
