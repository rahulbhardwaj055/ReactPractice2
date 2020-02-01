import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>Bio</h1>
            <p>
                Hi i am {props.name} my age is {props.age} . Thank you
            </p>
            <p>{props.children}</p>
        </div>

    )

};

export default person;