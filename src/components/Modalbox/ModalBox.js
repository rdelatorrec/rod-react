import PropTypes from 'prop-types'
import './Modalbox.css'

const Modalbox = ({ title = "Notification", open, close=true, onClose=() => {}, children }) => {
  if (!open) {
    return ""
  }

  return (<div className='modalbox'>
    <div className='modalbox__align'>
      <div className='modalbox__container'>
        <div className="modalbox__border">
          <div className='modalbox__header'>
            <div>
              {title}
            </div>
            <div>
              {close && <button className='modalbox__close' onClick={() => onClose()}>X</button>}
            </div>
          </div>
          <div className='modalbox__body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>)
}

Modalbox.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  close: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Modalbox