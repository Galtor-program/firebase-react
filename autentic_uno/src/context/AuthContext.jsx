import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  //recibe el usario, se parsea a JSON
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);
//para verificar cual es el children 
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //para mantener al usuario logueado al refrescar
  useEffect(() =>{
    localStorage.setItem("user", JSON.stringify(state.currentUser))
  },[state.currentUser])  
  
  //AuthContextProvider entrega el valor del usuario actual.
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};