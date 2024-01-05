import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { AuthContext } from './../context/AuthContext';
import { useContext } from "react";


const Logout = () =>{

const navigate = useNavigate
const {dispatch} = useContext(AuthContext)
const handleLogout = (e) => {
    e.preventDefault();
  
const auth = getAuth();
signOut(auth).then(() => {
    dispatch ({type:"LOGOUT"})
    navigate("home")
 
}).catch((error) => {
  console.log(error);
 
});

}

return (
  <div className="button-container">
    <button type="button" className="handle-logout" onClick={handleLogout}>Salir</button>
  </div>
);
}

export default Logout;