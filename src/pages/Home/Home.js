import React, {
  useState
} from 'react'
import { ToggleValue } from '../../utils/Services'
import { API_PEOPLE_URL } from '../../utils/Constants'
import Modalbox from '../../components/Modalbox/ModalBox'
import Items from '../../components/Items/Items'
import Main from '../../layouts/Main/Main'

const Home = ({ title = "Rod" }) => {
  const defaultTitle = `MyApp ${title}`
  const [modalbox, setModalBox] = useState(false)
  const content = <Items title='People' apiURL={API_PEOPLE_URL} />

  return (
    <Main>
      <div className="App">
        <h1>{defaultTitle}</h1>
        {!modalbox && <button onClick={() => ToggleValue(setModalBox)}>Open modalbox</button>}
      </div>
      <Modalbox open={modalbox} onClose={() => ToggleValue(setModalBox)}>
        {content}
      </Modalbox>
    </Main>
  )
}

export default Home