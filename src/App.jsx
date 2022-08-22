import CountersOwn from './components/CountersOwn'
import CountersReact from './components/CountersReact'
import { AppProvider } from './App.context'

const App = (root) => {
  return (
    <AppProvider value={root}>
      <div className="App">
        <h1>React Hooks: useState Demo</h1>
        <CountersReact />
        <CountersOwn />
      </div>
    </AppProvider>
  )
}

export default App
