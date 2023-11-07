import './App.css';
import {useState} from 'react';
import { sculptureList } from './data';
function App() {
  const [index,setIndex]= useState(0);
  const [showmore, setShowmore]=useState(false);

  function handleClick()
  {
    setIndex(index+1);
  }
  function handleMoreclick()
  {
    setShowmore(!showmore);
  }
  const sculpture=sculptureList[index];
  return (
    <>
    <button onClick= {handleClick}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>

    <h3>
      ({
        index+1
      } of {sculptureList.length})
    </h3>
    <button onClick={handleMoreclick}>{showmore ?'hide':'more'}Details</button>

    <p>
      {showmore &&sculpture.description}
    </p> 


    <img src={sculpture.url}
    alt={sculpture.alt}/>

    
    </>

    
  );
}

export default App;
