import React, { createContext } from 'react'
import { theme } from './Theme'

type ThemeCheck ={
    children: React.ReactNode
}

export const themeProvider = createContext(theme)

function Context({children}: ThemeCheck) {


  return (
    <themeProvider.Provider value={theme}>
        {children}
    </themeProvider.Provider>
  )
}

export default Context