import React from 'react'
import { useState } from '../hooks/useState'

const CountersOwn = () => {
  const [counterA, setCounterA] = useState(0)
  const [counterB, setCounterB] = useState(0)
  const [counterC, setCounterC] = useState(0)

  return (
    <div>
      <h2>Counters with my own useState</h2>
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
      <div>
        <p>
          Counter C: <span>{counterC}</span>
        </p>
        <button onClick={() => setCounterC(counterC + 1)}>+</button>
        <button onClick={() => setCounterC(counterC - 1)}>-</button>
      </div>
    </div>
  )
}

export default CountersOwn
