
// reductor, si se genera el Login el estado toma el payload del usuario actual
const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          currentUser: action.payload
        };
      }
      //al salirse el valor del usuario actual toma el valor de nulo.
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;