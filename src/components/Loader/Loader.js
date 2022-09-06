import { useSelector } from 'react-redux'
import './Loader.css'

const Loader = () => {
  const loader = useSelector(state => state.loader)

  if (!loader) {
    return ""
  }

  return (
    <div className="loader">
      <div className='loader__align'>
        Please wait ...
      </div>
    </div>
  )
}

export default Loader