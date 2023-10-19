import React from 'react';
import "../Navbar/Navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import google from "../../assets/google.png";
import world from "../../assets/world2.gif";


const Navbar = () => {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
        <div id="navWrap">
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#E4E4D0"}} className='Navbar'>
        <Toolbar variant="dense" >
          <Typography variant="h4" component="div" className='Navbar' sx={{fontFamily:"'Lobster', sans-serif"}}>
          HilitoBlog
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  <div id="verticalNavWrap">
    <div className="verticalNav">
      <div className="siteNavLabel  text-center">PROFILE</div>
      <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              
            <h1 style={{fontFamily:"'DM Serif Display', serif"}}>────PROFILE────</h1>
            <Button variant="contained" sx={{backgroundColor:"#8e8e7e42",marginBottom:"1rem", width:"100%",'&:hover': {
            backgroundColor: '#d2d2bd'
          }}} style={{fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",color:"#8d8d7f"}} >Add New Blog</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="verticalNav">
      <div className="siteNavLabel text-center"> LOGIN</div>
      <div>
        <div className="navContent">
        <div className="container">
          <div className="align-items-center">
            <div className="col-md-7 mx-auto">
                <img src={world} alt="world" style={{width:"15rem",height:"15rem",borderRadius:"50%"}} />
                <h1 style={{fontFamily:"'DM Serif Display', serif"}}>───LOGIN───</h1>
                <div className='login'>
                    <TextField sx={{ m: 1, width: '25ch' }} id="filled-basic" label="Email" variant="filled" />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" sx={{backgroundColor:"#6b7a6b",marginBottom:"1rem", width:"75%",'&:hover': {
            backgroundColor: '#889b88',
          }}} style={{fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",color:"#E4E4D0"}} >Login</Button>
        <Button variant="contained" sx={{backgroundColor:"#6b7a6b", width:"75%",'&:hover': {
            backgroundColor: '#889b88',
          }}}style={{fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",color:"#E4E4D0"}}>With <img src={google} alt="google"className='googleImg' /></Button>
                </div>
            
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
    <div className="verticalNav text-center text-white">
      <div className="siteNavLabel">REGISTER</div>
      <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto">
            <img src={world} alt="world" style={{width:"15rem",height:"15rem",borderRadius:"50%"}} />
                <h1 style={{fontFamily:"'DM Serif Display', serif"}}>──REGISTER──</h1>
                <div className='login'>
                    <TextField sx={{ m: 1, width: '25ch' }} id="filled-basic" label="Email" variant="filled" />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" sx={{backgroundColor:"#555843",marginBottom:"1rem", width:"75%",color:"#E4E4D0",fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",
          '&:hover': {
            backgroundColor: '#7e8364',
          }}} >Login</Button>
        <Button variant="contained" sx={{backgroundColor:"#555843", width:"75%",color:"#E4E4D0",fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",
          '&:hover': {
            backgroundColor: '#7e8364',
          }
      }}>With <img src={google} alt="google"className='googleImg' /></Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar