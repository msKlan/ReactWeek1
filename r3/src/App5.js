import React, {useState, useEffect} from 'react';
import './App.css';

function App5() {

  const [chuckJoke, setChuckJoke] = useState({value: ""});
  const [dadJoke, setDadJoke] = useState("");
  const [chuckFlag, setChuckFlag] = useState(false);
  const [dadFlag, setDadFlag] = useState(false);

  useEffect(() => {
    function fetchChuckJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(joke => {setChuckJoke(joke);})
      .catch(err => console.log("Ups "+err));
    }
    fetchChuckJoke();
  }, [chuckFlag]);

  useEffect(() => {
    function fetchDadJoke() {
      fetch('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
      .then(res => res.json())
      .then(joke => {setDadJoke(joke.joke);})
      .catch(err => console.log("Ups "+err));
    }
    fetchDadJoke();
    
    setTimeout(() => setDadFlag(!dadFlag), 10000);
  }, [dadFlag]);

  return (
    <div>
      Chuck
      <button onClick={() => setChuckFlag(!chuckFlag)}>Get joke</button>
      <p>Chuck joke: { chuckJoke.value }</p>
      <hr />
      <p>Dad joke: { dadJoke }</p>

    </div>
  );
}

export default App5;
