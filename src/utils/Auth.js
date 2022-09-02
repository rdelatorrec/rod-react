import { useContext } from 'react'
import {
  Navigate,
} from "react-router-dom"
import { AppContext } from "./Services"

function Auth(Component) {
  function ComponentWithRouterProp(props) {
    const { isLogged } = useContext(AppContext)

    return (
      isLogged ? 
        <Component
          {...props}
        />
      : <Navigate to="/login" />
    )
  }

  return ComponentWithRouterProp
}

export default Auth