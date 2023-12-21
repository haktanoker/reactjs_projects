import { useEffect, useState } from 'react';
import './style.css';

function App() {

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randVal, setRandVal] = useState(0);

  const numberData = (e) => {
      e.target.className == "min" ? setMinVal(e.target.value) : setMaxVal(e.target.value);
    }
  const getRandom = () => {
    const min = Math.ceil(minVal);
    const max = Math.floor(maxVal);
    setRandVal(Math.floor(Math.random() * (max - min) + min));
  }

  return (
    <>
      <div className='container'>
        <div className='random'>
          Random Number is <span className='numb'>{randVal}</span>
        </div>
        <div className='inputs'>
          <div className='minNum'>
            <input className='min' onChange={numberData} placeholder='Min Value' type='number'></input>
          </div>
          <div className='maxNum'>
            <input className='max' onChange={numberData} placeholder='Max Value' type='number'></input>
          </div>
        </div>

        <button onClick={getRandom}>Get Random Number</button>

      </div>
    </>
    );
}

export default App;