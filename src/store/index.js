import initialValues from "./initValues"

const Reducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'user':
      return { user: action.payload }
    default:
      return state
  }

}

export default Reducer