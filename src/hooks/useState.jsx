import React from 'react'
import App from '../App'
import { useAppProvider } from '../App.context'

let root
let stateIndex = -1
const stateValues = []

const useState = (initialValue) => {
  if (!root) {
    root = useAppProvider().root
  }
  const currentStateIndex = Number(stateIndex++)
  const setValue = (newValue) => {
    stateValues[currentStateIndex] = newValue
    render()
  }

  if (stateValues[currentStateIndex] === undefined) {
    stateValues[currentStateIndex] = initialValue
  }
  return [stateValues[currentStateIndex], setValue]
}

const render = () => {
  resetStateIndex()
  if (!root) return
  root.render(
    <React.StrictMode>
      <App root={root} />
    </React.StrictMode>
  )
}

const resetStateIndex = () => {
  stateIndex = -1
}

export { useState }
