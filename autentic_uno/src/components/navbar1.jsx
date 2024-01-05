import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

function Navbar1() {
    const navigate = useNavigate();
    const handleButttonOne = (e) => {
        navigate("Login")
    };

    const handleButttonTwo = (e) => {
        navigate("New")
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
            Inicio
          </Typography>
          
          <Button color="inherit" onClick={ handleButttonOne }>Login</Button>
          <Button color="inherit" onClick= { handleButttonTwo }>Registrate</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar1;