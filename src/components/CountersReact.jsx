import React, { useState } from 'react'

const CountersReact = () => {
  const [counterA, setCounterA] = useState(0)
  const [counterB, setCounterB] = useState(0)

  return (
    <div>
      <h2>Counters with React useState</h2>
      <div>
        <p>
          Counter A: <span>{counterA}</span>
        </p>
        <button onClick={() => setCounterA(counterA + 1)}>+</button>
        <button onClick={() => setCounterA(counterA - 1)}>-</button>
      </div>
      <div>
        <p>
          Counter B: <span>{counterB}</span>
        </p>
        <button onClick={() => setCounterB(counterB + 1)}>+</button>
        <button onClick={() => setCounterB(counterB - 1)}>-</button>
      </div>
    </div>
  )
}

export default CountersReact
