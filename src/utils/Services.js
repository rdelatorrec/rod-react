import { createContext } from 'react'

const ToggleValue = set => set(val => !val)
const AppContext = createContext()

export { AppContext, ToggleValue }