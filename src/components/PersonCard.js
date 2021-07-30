import React from 'react';

const Person = (props) => {
  const {firstName, lastName, age, hairColor} = props;
  
  return (
    <div>
      <h2>{lastName},{firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  )
}

export default Person;

/**
 * 1. import react
 * 3. create person component with props
 * 4. destructure props
 * 
 * 6. Returns html to be rendered to page with corresponding props plugged in
 * 
 * 15. exports component
 */