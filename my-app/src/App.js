import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App1 extends Component {
    state = {
        persons: [
            { name: 'test', age: 28 },
            { name: 'test1', age: 26 },
            { name: 'test2', age: 27 }
        ]
    }

    render(){
        return (
          <div className="App1">
                <h1>Hi This is testing</h1>
                <button>Switch User</button>
                <Person name={this.state.persons[0]} age={this.state.persons[0]}/>
                <Person name={this.state.persons[1]} age={this.state.persons[1]}/>
                <Person name={this.state.persons[1]} age={this.state.persons[2]} >what you want to say ?</Person>
          </div>
        );
    }
}

export default App1;

