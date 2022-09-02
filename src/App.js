import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { AppContext } from "./utils/Services"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import { APP_AUTH, APP_TOKEN } from "./utils/Constants"
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import { useJwt } from "react-jwt"
//import JWT from 'expo-jwt'
import './App.css'

function App() {
  const [ user, setUser ] = useState({})
  const [ isLogged, setIsLogged ] = useState(false)
  const token = localStorage.getItem(APP_TOKEN)
  const { decodedToken } = useJwt(token)

  useEffect(() => {
    const ciphertext = Cookies.get(APP_AUTH)

    if (ciphertext !== undefined) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_API_SECRET)
      const originalText = bytes.toString(CryptoJS.enc.Utf8)
      setUser(decodedToken)
      setIsLogged(originalText === process.env.REACT_APP_API_KEY)
    }
  }, [decodedToken])

  return (
    <AppContext.Provider value={{isLogged, setIsLogged, user, setUser}}>
      <Routes>
        <Route path="/" element={<Home title="Rod" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about/:name" element={<About />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
