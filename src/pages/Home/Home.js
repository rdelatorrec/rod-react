import React, {
  useState
} from 'react'
import { useDispatch } from 'react-redux'
import { ToggleValue } from '../../utils/Services'
import { API_PEOPLE_URL } from '../../utils/Constants'
import Modalbox from '../../components/Modalbox/ModalBox'
import Items from '../../components/Items/Items'
import Main from '../../layouts/Main/Main'

const Home = ({ title = "Rod" }) => {
  const dispatch = useDispatch()
  const defaultTitle = `MyApp ${title}`
  const [modalbox, setModalBox] = useState(false)
  const content = <Items title='People' apiURL={API_PEOPLE_URL} />

  const showLoader = () => {
    dispatch({
      type: 'loader',
      payload: true,
    })

    setTimeout(() => {
      dispatch({
        type: 'loader',
        payload: false,
      })
    }, 1000)
  }

  return (
    <Main>
      <div className="App">
        <h1>{defaultTitle}</h1>
        {!modalbox && <button onClick={() => ToggleValue(setModalBox)}>Open modalbox</button>}
        <button onClick={showLoader}>Open Loader</button>
      </div>
      <Modalbox open={modalbox} onClose={() => ToggleValue(setModalBox)}>
        {content}
      </Modalbox>
    </Main>
  )
}

export default Home