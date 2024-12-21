import './App.css';
import Lists from './components/Lists';

function App() {
  const dummyData = [
    {id: 1, text: "I pictured this year "},
    {id: 2, text: "a little bit different "},
    {id: 3, text: "when it hit february."},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Lists data={dummyData}/>
    </div>
  );
}

export default App;