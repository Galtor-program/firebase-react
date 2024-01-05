import { useState } from "react";
import {
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, database, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import "./../new_user/new.scss";

const New = ({ inputs }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
 
  const navigate = useNavigate()


  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(database, "users", res.user.uid), {
        ...data,
        
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };


  const handleBack = (e) => {
      navigate(-1);
  
  };

  return (
    <div className="new">
      
      <div className="newContainer">
        
        <div className="top">
          <h1>Crear nuevo usuario</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Subir Imagen <CloudUploadRoundedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              
              <div className = "button-container">
              <button className="send" type="submit">
                Enviar
              </button>
              <button  className = "back" onClick={handleBack}>
                Cancelar
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;