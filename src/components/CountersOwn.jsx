import React from 'react'
import App from '../App'
import { useAppProvider } from '../App.context'

let stateIndex = -1
const stateValues = []

const useState = (initialValue, render) => {
  const currentStateIndex = Number(stateIndex++)

  if (stateValues[currentStateIndex] === undefined) {
    stateValues[currentStateIndex] = initialValue
  }
  const setValue = (newValue) => {
    stateValues[currentStateIndex] = newValue
    render()
  }
  return [stateValues[currentStateIndex], setValue]
}

const CountersOwn = () => {
  stateIndex = -1
  const root = useAppProvider().root
  const render = () => {
    root.render(
      <React.StrictMode>
        <App root={root} />
      </React.StrictMode>
    )
  }
  const [counterA, setCounterA] = useState(0, render)
  const [counterB, setCounterB] = useState(1, render)

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
    </div>
  )
}

export default CountersOwn
