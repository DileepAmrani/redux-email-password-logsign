const INTIAL_STATE = {
  signuperror: "",
  loginerror: ''
}
const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "signupFailed":
      return {
        ...state, signuperror: action.signuperror
      }
      break;
    case "loginFailed":
      return {
        ...state, loginerror: action.loginerror
      }
      break;


    default:
      return {
        state
      }
  }


}

export default reducer 