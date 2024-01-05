
import { useContext, useState } from 'react';
import './../login/login.scss';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    //error para generar el span comienza en falso, hasta que ocurre el error y activa el span.
    const [error, setError] = useState(false);
    //email y password se inicializan en vacio hasta que reciba la información.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //metodo de router para navegar una vez realizado el login.
    const navigate = useNavigate();
    
    const {dispatch} = useContext(AuthContext)
    
    const handleLogin = (e) => {
        e.preventDefault();
        //metodo de autenticación de firebase, sacado de la documentación
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          //Se utiliza el LOGIN desde el AuthContext recibiendo el payload.
          dispatch({type:"LOGIN", payload:user})
          navigate("/investigaciones")
          console.log(user);
          
        })
        //en caso de error de login aca se setea el valor de error a true para activar el span.
        .catch((error) => {
         setError(true);
        });    




    }
    
    return (
        //formulario de login.
        <div className="login">
            <form onSubmit={handleLogin}>
                <h1>Utilice sus credenciales</h1>
                <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                {error && <span>Correo o password erroneas!</span>}

            </form>



        </div>
    )
    }
    
    export default Login