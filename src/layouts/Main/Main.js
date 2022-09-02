import { useContext } from 'react'
import { AppContext } from "../../utils/Services"
import Auth from "../../utils/Auth"
import Nav from '../../components/Nav/Nav'
import './Main.css'

const Main = ({ children }) => {
  const { user } = useContext(AppContext)

  return (
    <div className="container">
      <div className="layout">
        <div className="layout__sidebar">
          <div className='layout__border'>
            Welcome: <strong>{`${user.first_name} ${user.last_name}`}</strong>
          </div>
          <Nav />
        </div>
        <div className="layout__content">
          <div className='layout__border'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth(Main)