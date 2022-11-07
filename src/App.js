import { React, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  }

  const decNum = () => {
    setNum(num - 1);
  }
  const res = () => {
    setNum(0);
  }
  return (
    <div className='container'>
      <div>
        <h1 className='btnnum'> {num} </h1>
        <button className='btn' onClick={decNum}> - </button>
        <button className='btn' onClick={res} > Reset </button>
        <button className='btn' onClick={incNum}> + </button>

      </div>
    </div>
  )
}

export default App



