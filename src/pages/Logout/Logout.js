import { useEffect, useContext } from 'react'
import {
  Navigate,
} from "react-router-dom"
import { AppContext } from "../../utils/Services"
import { APP_AUTH, APP_TOKEN } from "../../utils/Constants"
import Cookies from 'js-cookie'

const Logout = () => {
  const { setIsLogged } = useContext(AppContext)

  useEffect(() => {
    Cookies.remove(APP_AUTH)
    localStorage.removeItem(APP_TOKEN)
    setIsLogged(false)
  }, [setIsLogged])

  return <Navigate to="/login" />
}

export default Logout