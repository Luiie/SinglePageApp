import './App.css';
import Lists from './components/Lists/Lists';
import NewList from './components/NewList/NewList';

function App() {
  const dummyData = [
    {id: 1, text: "I pictured this year "},
    {id: 2, text: "a little bit different "},
    {id: 3, text: "when it hit february."},
  ]
  return (
    <div className="App">
      <NewList />
      <Lists data={dummyData}/>
    </div>
  );
}

export default App;