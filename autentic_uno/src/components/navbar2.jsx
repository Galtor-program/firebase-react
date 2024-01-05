import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from './../context/AuthContext';
;



function Navbar2 ()  {
    const navigate = useNavigate
    const {dispatch} = useContext(AuthContext)
    const handleLogout = (e) => {
        const auth = getAuth();
        signOut(auth).then(() => {
        dispatch ({type:"LOGOUT"})
        navigate("home")
   
        }).catch((error) => {
        console.log(error);
        
        });
        };
          
      
       

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Investigaciones
          </Typography>
          
          <Avatar  className = "avatar" alt="Avatar " src="" 
          sx={{ width: 56, height: 56 }}
          />
          <Button color="inherit" onClick={ handleLogout }>Logout</Button>
         
          
        </Toolbar>
      </AppBar>
    </Box>
    
  );




}
export default Navbar2;