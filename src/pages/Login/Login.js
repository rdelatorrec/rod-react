import { useContext, useRef, useCallback } from 'react'
import {
  Navigate,
} from "react-router-dom"
import { useState } from 'react'
import { AppContext } from "../../utils/Services"
import { APP_AUTH, APP_TOKEN } from "../../utils/Constants"
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import './Login.css'

const Login = () => {
  const { isLogged, setIsLogged } = useContext(AppContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const [ showError, setShowError ] = useState(false)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const cleanup = el => {
    if (el.value === "") {
      el.classList.add("form__error")
      el.focus()
    }
    else {
      el.classList.remove("form__error")
    }
  }

  const handleSubmit = useCallback(e => {
    e.preventDefault()

    cleanup(emailRef.current)
    cleanup(passwordRef.current)

    if (email === "admin" && password === "pass1234") {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwMSwidXNlcm5hbWUiOiJyb2RyaWdvLmNlcnZhbnRlcyIsImZpcnN0X25hbWUiOiJSb2QiLCJsYXN0X25hbWUiOiJDZXJ2YW50ZXMifQ.Kvb4x0Cq7ELYDMRaIiN323h1cuGfBnu7tNghctNDNoA'
      const ciphertext = CryptoJS.AES.encrypt(process.env.REACT_APP_API_KEY, process.env.REACT_APP_API_SECRET).toString();
      Cookies.set(APP_AUTH, ciphertext)
      localStorage.setItem(APP_TOKEN, token)
      setIsLogged(true)
    }
    else {
      setShowError(true)
    }
  }, [email, password, setIsLogged])

  if (isLogged) {
    return <Navigate to="/" />
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className='login__container'>
          <div className='login__box'>
            <div className='login__border'>
              <h1>Login</h1>
              {showError && <div className='alert-error'>User or Password are invalid.</div>}
              <div>
                <label>User</label>
                <input 
                  type="text" 
                  name="email" 
                  value={email} 
                  ref={emailRef} 
                  onBlur={e => cleanup(e.target)}
                  onChange={e => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={password} 
                  ref={passwordRef} 
                  onBlur={e => cleanup(e.target)}
                  onChange={e => setPassword(e.target.value)} 
                />
              </div>
              <div>
                <button type='submit'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login