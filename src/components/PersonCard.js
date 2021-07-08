import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h2>{props.lastName},{props.firstName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  )
}

export default Person;