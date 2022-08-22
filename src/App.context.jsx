import React from 'react'

const AppContext = React.createContext({})

const AppProvider = AppContext.Provider

function useAppProvider() {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppProvider must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useAppProvider }
