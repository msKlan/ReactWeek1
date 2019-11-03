import React from 'react';
import './App.css';
import person, { males, females } from "./file2";

function App2() {

  const {firstName, email} = person;

  console.log([...males, ...females]);
  console.log([...males, "Kurt2", ...females, "Tina"]);
  console.log({...person, phone:123456, friends:[...males, ...females]});

  return (
    <div>
      <h1>Ex2</h1>
      <p>{firstName} {email}</p>
    </div>
  );
}

export default App2;
