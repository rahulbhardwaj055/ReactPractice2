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

    switchHandler = () => {
    //    console.log('test');
    // not  to use this as this don't work ->    this.state.persons[0].name = 'Rahul';
        this.setState({
            persons: [
                { name: 'Rahul', age: 28 },
                { name: 'Nishant', age: 26 },
                { name: 'Vansh', age: 27 }
            ]

        })

    }

    render(){
        return (
          <div className="App1">
                <h1>Hi This is testing</h1>
                <button onClick={this.switchHandler} >Switch User</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[2].age} >what you want to say ?</Person>
          </div>
        );
    }
}

export default App1;

