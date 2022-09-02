import PropTypes from 'prop-types'
import Modalbox from "../Modalbox/ModalBox"
import './Confirm.css'

const Confirm = ({ 
  onConfirm, 
  onCancel, 
  labels={
    cancel: "Cancel", 
    accept: "Accept"
  }, ...props 
}) => {
  return (
    <Modalbox {...props} >
      {props.children}
      <div className="buttons">
        <button className='button__cancel' onClick={() => onCancel()}>{labels.cancel}</button>
        <button className='button__confirm' onClick={() => onConfirm()}>{labels.accept}</button>
      </div>
    </Modalbox>
  )
}

Confirm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  labels: PropTypes.object,
  open: PropTypes.bool.isRequired,
  close: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Confirm