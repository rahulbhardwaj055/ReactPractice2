import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'test', age: 28 },
            { name: 'test1', age: 26 },
            { name: 'test2', age: 27 }
        ]
    });

    console.log(personsState);

    const switchHandler = () => {
        //    console.log('test');
        // not  to use this as this don't work ->    personsState.persons[0].name = 'Rahul';
        setPersonsState({
            persons: [
                { name: 'Rahul', age: 28 },
                { name: 'Nishant', age: 26 },
                { name: 'Vansh', age: 27 }
            ]

        });

    }


        return (
          <div className="App">
                <h1>Hi This is testing</h1>
                <button onClick={switchHandler} >Switch User</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >what you want to say ?</Person>
          </div>
        );
}

export default app;