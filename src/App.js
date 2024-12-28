import { useState } from 'react';
import './App.css';
import Lists from './components/Lists/Lists';
import NewList from './components/NewList/NewList';

function App() {
  const [dummyData, setDummyData] = useState([
    {id: 1, text: "I pictured this year "},
    {id: 2, text: "a little bit different "},
    {id: 3, text: "when it hit february."},
  ]);

  const addNewListHandler = (newList) => {
    setDummyData(dummyData.concat(newList));
  };

  return (
    <div className="App">
      <NewList onAddList={addNewListHandler} />
      <Lists data={dummyData}/>
    </div>
  );
}

export default App;