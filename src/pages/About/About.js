import {
  useState,
} from 'react'
import {
  useParams,
} from "react-router-dom"
import withRouter from '../../utils/withRouter'
import Main from '../../layouts/Main/Main'
import Confirm from '../../components/Confirm/Confirm'

const About = ({ router }) => {
  const [ open, setOpen ] = useState(false)
  const params = useParams()

  const closeModal = fn => {
    setOpen(false)
    fn()
  }

  const onCancel = () => {
    console.log("onCancel")
  }

  const onConfirm = () => {
    console.log("onConfirm")
    router.navigate("/")
  }

  return (
    <Main>
      <h1>About {params.name}</h1>
      <button onClick={() => setOpen(true)}>Confirm</button>
      <Confirm 
        title="Alert" 
        open={open} 
        close={false} 
        onConfirm={() => closeModal(onConfirm)} 
        onCancel={() => closeModal(onCancel)}
      >
        HELLO WORLD
      </Confirm>
    </Main>
  )
}

export default withRouter(About)