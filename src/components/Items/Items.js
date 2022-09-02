import {
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'

const Items = ({ title = "List", apiURL }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(res => {
        setItems(res.results)
      })
  }, [apiURL])

  if (items.length === 0) {
    return "Loading ..."
  }

  return (<>
    <h1>{title}</h1>
    <ul>
      {items.map(item => <li key={item.name}>{item.name}</li>)}
    </ul>
  </>)
}

Items.propTypes = {
  title: PropTypes.string,
  apiURL: PropTypes.string.isRequired,
}

export default Items