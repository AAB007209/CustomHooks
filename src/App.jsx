import { useState } from 'react';
import './App.css';
import useLocalStorage from './lib/useLocalStorage';

function App() {
  const [name, setName, clearName] = useLocalStorage("Name", "");
  const [inputValue, setInputValue] = useState(name);

  return (
    <div className='App'>
      <h1>Custom Hook - useLocalStorage</h1>
      <div className='container'>
        <input
          type="text"
          placeholder="Enter the text to save"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
          <button className='buttons' onClick={() => setName(inputValue)}>Save to Local Storage</button>
          <button className='buttons' onClick={clearName}>Clear Local Storage</button>
        </div>
      </div>
    </div>
  );
}

export default App;
