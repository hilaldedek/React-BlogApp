import React, { useState } from 'react';
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
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    const [loginemail,setLoginEmail]=useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const Register=()=>{
    console.log("selam");
    console.log("email",email);
    console.log("password",password);
    window.localStorage.setItem('username',email,);
    window.localStorage.setItem('password',password);
    
  }

  const Login=()=>{
    const trueEmail=window.localStorage.getItem('username',email);
    const truePassword=window.localStorage.getItem('password',password);
    if(loginemail===trueEmail && loginPassword===truePassword){
      console.log("giriş başarılı");
    }
  }

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
    <div className='cardStyle'>
    <div class="main">
  <div class="card">
    <div class="fl">
      <div class="fullscreen">
        <svg class="fullscreen_svg" viewBox="0 0 100 100"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path></svg>
      </div>
    </div>
    <div class="card_content">
      <button>Code to Infinity!</button>
    </div>
    <div class="card_back"></div>
  </div>
  <div class="data">
    <div class="img">
      <svg viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke-linecap="butt" fill="none" stroke-width="2.00">
      <path d="M 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19" stroke="#59afb1"></path>
      <path d="M 32.87 20.19
        L 42.25 26.79" stroke="#4fa6a8"></path>
      <path d="M 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20" stroke="#69cbc0"></path>
      <path d="M 21.32 36.20
        Q 15.81 38.21 11.00 41.21" stroke="#6fcdbb"></path>
      <path d="M 11.00 41.21
        L 9.75 40.96" stroke="#5ec8ab"></path>
      <path d="M 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94" stroke="#5cae9e"></path>
      <path d="M 79.95 6.12
        L 62.46 11.32" stroke="#3190a6"></path>
      <path d="M 62.46 11.32
        Q 47.42 14.67 32.87 20.19" stroke="#3a96a3"></path>
      <path d="M 80.00 11.06
        L 64.50 17.46" stroke="#22a3be"></path>
      <path d="M 64.50 17.46
        L 62.46 11.32" stroke="#28879d"></path>
      <path d="M 64.50 17.46
        L 43.00 26.96" stroke="#2ba9bb"></path>
      <path d="M 43.00 26.96
        L 42.25 26.79" stroke="#4ab2b2"></path>
      <path d="M 80.00 52.31
        Q 71.64 45.91 62.46 40.67" stroke="#45ced3"></path>
      <path d="M 62.46 40.67
        Q 62.43 36.88 58.50 36.79" stroke="#13636e"></path>
      <path d="M 58.50 36.79
        Q 50.07 32.95 43.00 26.96" stroke="#45ced3"></path>
      <path d="M 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67" stroke="#326b65"></path>
      <path d="M 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79" stroke="#59d4b5"></path>
      <path d="M 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20" stroke="#6ad8c5"></path>
      <path d="M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07" stroke="#326b65"></path>
      <path d="M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41" stroke="#326b65"></path>
      <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46" stroke="#4bb793"></path>
      <path d="M 32.50 55.79
        L 11.00 41.21" stroke="#5fd6b0"></path>
      <path d="M 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19" stroke="#48d08e"></path>
      </g>
      <path d="M 0.00 0.00
        L 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19
        L 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20
        Q 15.81 38.21 11.00 41.21
        L 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94
        L 0.00 0.00
        Z" fill="#6ebfb6"></path>
      <path d="M 14.06 0.00
        L 80.00 0.00
        L 79.95 6.12
        L 62.46 11.32
        Q 47.42 14.67 32.87 20.19
        L 14.37 8.19
        A 1.04 1.02 -78.7 0 1 13.93 7.52
        Q 13.33 4.09 14.06 0.00
        Z" fill="#439eac"></path>
      <path d="M 79.95 6.12
        L 80.00 11.06
        L 64.50 17.46
        L 62.46 11.32
        L 79.95 6.12
        Z" fill="#1f81a0"></path>
      <path d="M 62.46 11.32
        L 64.50 17.46
        L 43.00 26.96
        L 42.25 26.79
        L 32.87 20.19
        Q 47.42 14.67 62.46 11.32
        Z" fill="#308d99"></path>
      <path d="M 80.00 11.06
        L 80.00 52.31
        Q 71.64 45.91 62.46 40.67
        Q 62.43 36.88 58.50 36.79
        Q 50.07 32.95 43.00 26.96
        L 64.50 17.46
        L 80.00 11.06
        Z" fill="#25c5dc"></path>
      <path d="M 42.25 26.79
        L 43.00 26.96
        Q 50.07 32.95 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67
        Q 71.64 45.91 80.00 52.31
        L 80.00 80.00
        L 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20
        C 24.14 34.92 41.40 28.26 42.25 26.79
        Z
        M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07
        Z
        M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41
        Z" fill="#64d6ca"></path>
      <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46
        L 0.00 36.94
        L 0.22 35.85
        A 1.00 1.00 0.0 0 1 1.71 35.19
        Q 5.99 37.71 9.75 40.96
        Z" fill="#499c85"></path>
      <path d="M 21.32 36.20
        Q 22.66 37.82 24.05 39.44
        C 26.34 42.09 27.54 45.21 29.79 47.81
        C 30.64 48.79 36.74 55.42 32.50 55.79
        L 11.00 41.21
        Q 15.81 38.21 21.32 36.20
        Z" fill="#70dac0"></path>
      <rect rx="2.30" height="9.74" width="5.00" y="36.77" x="43.75" fill="#000000"></rect>
      <path d="M 58.50 36.79
        Q 62.43 36.88 62.46 40.67
        L 61.94 44.74
        Q 61.91 44.99 61.77 45.19
        C 60.02 47.68 57.53 46.71 56.86 44.07
        Q 55.85 40.04 58.50 36.79
        Z" fill="#000000"></path>
      <path d="M 9.75 40.96
        L 11.00 41.21
        L 32.50 55.79
        Q 34.11 56.98 43.10 62.62
        Q 44.74 63.65 52.39 69.30
        A 1.00 1.00 0.0 0 1 52.34 70.94
        Q 46.22 74.94 40.81 79.86
        L 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19
        L 0.05 44.46
        Q 5.15 43.50 9.75 40.96
        Z" fill="#4dd1a0"></path>
      <path d="M 46.91 54.39
        C 50.72 56.87 54.90 57.18 58.63 54.41
        A 1.00 1.00 0.0 0 1 59.41 54.23
        C 62.47 54.80 62.54 57.43 60.15 58.94
        Q 53.38 63.20 46.28 59.41
        C 43.88 58.13 42.37 55.52 46.04 54.28
        A 1.00 0.99 51.9 0 1 46.91 54.39
        Z" fill="#000000"></path>
      <path d="M 11.19 80.00
        L 0.00 80.00
        L 0.00 65.19
        C 0.74 64.76 1.28 64.97 1.70 65.70
        Q 5.99 73.11 11.57 78.67
        Q 12.51 79.61 11.19 80.00
        Z" fill="#43ce7c"></path>
      </svg>
    </div>
    <div class="text">
      <div class="text_m">CSS Gradient Button</div>
      <div class="text_s">Praashoo7</div>
    </div>
  </div>
  <div class="btns">
    <div class="likes">
      <svg viewBox="-2 0 105 92" class="likes_svg"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span class="likes_text">22</span>
    </div>
    <div class="comments">
      <svg title="Comment" viewBox="-405.9 238 56.3 54.8" class="comments_svg"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg><span class="comments_text">12</span>
    </div>
    <div class="views">
      <svg title="Views" viewBox="0 0 30.5 16.5" class="views_svg"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg><span class="views_text">332</span>
    </div>
  </div>
</div>

    </div>
  <div id="verticalNavWrap">
    {/* PROFILE */}
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
    {/* LOGİN */}
    <div className="verticalNav">
      <div className="siteNavLabel text-center" > LOGIN</div>
      <div>
        <div className="navContent">
        <div className="container">
          <div className="align-items-center">
            <div className="col-md-7 mx-auto">
                <img src={world} alt="world" style={{width:"15rem",height:"15rem",borderRadius:"50%"}} />
                <h1 style={{fontFamily:"'DM Serif Display', serif"}}>───LOGIN───</h1>
                <div className='login'>
                    <TextField value={loginemail} onChange={e=>setLoginEmail(e.target.value)} sx={{ m: 1, width: '25ch' }} id="filled-basic" label="Email" variant="filled" />
            <form sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}
            id="filled-adornment-password" autoComplete=''
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
        </form>
        <Button variant="contained" onClick={Login()} sx={{backgroundColor:"#6b7a6b",marginBottom:"1rem", width:"75%",'&:hover': {
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
    {/* REGISTER */}
    <div className="verticalNav text-center text-white">
      <div className="siteNavLabel">REGISTER</div>
      <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto">
            <img src={world} alt="world" style={{width:"15rem",height:"15rem",borderRadius:"50%"}} />
                <h1 style={{fontFamily:"'DM Serif Display', serif"}}>──REGISTER──</h1>
                <div className='login'>
                    <TextField sx={{ m: 1, width: '25ch' }} id="filled-basic personEmail" label="Email"  value={email} onChange={e=>setEmail(e.target.value)}  variant="filled" />
            <form sx={{ m: 1, width: '25ch' }} variant="filled" >
          <InputLabel htmlFor="filled-adornment-password" >Password</InputLabel>
          <FilledInput value={password} onChange={e=>setPassword(e.target.value)}
            id="filled-adornment-password userPassword" autoComplete=''
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
            </form>
        <Button variant="contained" onClick={Register()} sx={{backgroundColor:"#555843",marginBottom:"1rem", width:"75%",color:"#E4E4D0",fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",
          '&:hover': {
            backgroundColor: '#7e8364',
          }}}  >Register</Button>
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