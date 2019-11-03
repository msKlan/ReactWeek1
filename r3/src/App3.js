import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { names } from "./file2";

function App3() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  Welcome.propTypes = {
    name : PropTypes.string.isRequired
  }

  function WelcomePerson (props) {
    const {firstName, lastName, email} = props.person;
    return (
        <li>{firstName} {lastName} {email}</li>
    )
  }
   
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        {/* <Welcome name={132} /> */}
        {/* Expected to fail - not a string */}

        <WelcomePerson person={names[0]}  />        

        {names.map((person, index) => (
          <WelcomePerson  key={index} person={person}/>
        )) }
      </div>
    );
  }
  

  return (
    <div>
      <App/>
    </div>
  );
}

export default App3;

