import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import { useState, useContext } from 'react';
import {  BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.jsx"



function App() {
  const [count, setCount] = useState(0)

  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children}) => {
    return currentUser ? children: <Navigate to="/" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element= {<Login/>} />
          <Route path = "/home" element= {
              <RequireAuth>
                 <Home />  
              </RequireAuth> 
            } />
       </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App
