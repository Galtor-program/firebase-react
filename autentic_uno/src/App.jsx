import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import { useState, useContext } from 'react';
import {  BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.jsx"
import New from "./pages/new_user/New.jsx";
import { userInputs } from "./formSource.jsx";
import Investigaciones from "./pages/investigaciones/investigaciones.jsx";



function App() {
 

  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children}) => {
    //Si no hay usuario vuelve al inicio
    return currentUser ? children: <Navigate to="/" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element = { <Home /> } />


          <Route path="/new" element= {<New inputs = { userInputs } />} />
          <Route path = "/investigaciones" element= {
              <RequireAuth>
                 <Investigaciones />  
              </RequireAuth> 
            } />
          <Route path = "/login" element= { <Login /> } />
       </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App;
