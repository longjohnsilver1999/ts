import React from 'react';
import QuestionCard from './components/QuestionCard';
import './App.css';

function App() {
  const shuruKiaJay=async ()=>{

  }
  const LockKardiaJay=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const aglaSawal=()=>{

  }
  return (
    <div className="App">
    <h1>KBC</h1>
    <button className='start' onClick={shuruKiaJay}>Kaun banega crorepati.Lets Play</button>
    <p className='score'>Score:</p>
    <p>Heres the next question..</p>
    <QuestionCard />
    <p></p>
    </div>
  );
}

export default App;
