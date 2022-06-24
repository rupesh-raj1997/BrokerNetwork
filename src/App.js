import './App.css';
import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:6969/api/v1/profile'
function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');

  useEffect(async () => {
    const resp = await fetch(`${API_URL}`).then(resp => resp.json()).then(data => {
      setName(data.name || '')
      setAge(data.age || '')
      setLinkedinUrl(data.linkedin || '')
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Server Side rendered page created by<br />
          Name: {name}<br />
          Age: {age}<br />
          Connect on <a href={linkedinUrl}>linkedin</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href='/details'>Second Route</a>
      </header>
    </div>
  );
}

export default App;
