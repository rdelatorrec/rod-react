import Auth from "../../utils/Auth"
import Nav from '../../components/Nav/Nav'
import { useSelector } from 'react-redux'
import './Main.css'
import Loader from "../../components/Loader/Loader"

const Main = ({ children }) => {
  const user = useSelector(state => state.user)

  return (
    <>
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
      <Loader />
    </>
  )
}

export default Auth(Main)