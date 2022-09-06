import initialValues from "./initialValues"

const Reducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, user: action.payload }
    case 'loader':
      return { ...state, loader: action.payload }
    default:
      return state
  }

}

export default Reducer