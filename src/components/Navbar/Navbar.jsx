import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import world from "../../assets/world2.gif";
import defaultImg from "../../assets/world.png"
import { InputLabel } from '@mui/material';


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
  // class userRegister{
  //   constructor(email,password){
  //     this.emailOf= email;
  //     this.passwordOf= password;
  //   }
  // }
  const list=[];
  var counter=0;
  const Register=()=>{
    
    counter++;
    
    console.log("hello REGİSTER");
    if(counter===1){
      console.log("COUNTER",counter);
      window.localStorage.setItem(`${counter+1}.user Email`,email);
    window.localStorage.setItem(`${counter+1}.user Password`,password);
    // const user =new userRegister(`${email}`,`${password}`);
    list.push(email);
    console.log("if bloğu");
    console.log(list);
    }
    else if((list.findIndex((x)=> x===email))===-1){
      // const user =new userRegister(`${email}`,`${password}`);
      list.push(email);
      window.localStorage.setItem(`${counter+1}.user Email`,email);
    window.localStorage.setItem(`${counter+1}.user Password`,password);
    console.log("else if bloğu");
    console.log(list);
    }
    else{
      console.log("bu mail kullanılmış");
      counter--;
    }
  }

  const Login=()=>{
    var giris=false;
    const trueEmail=window.localStorage.getItem('username',email);
    const truePassword=window.localStorage.getItem('password',password);

    if(loginemail===trueEmail && loginPassword===truePassword){
      giris=true;
      console.log("giriş başarılı");
      console.log(giris);
  }
  else{
    giris=false;
    console.log("hatalı giriş");
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
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg' />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg' />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" alt='defaultImg' src={defaultImg} />
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
        </div>
        <div className="card">
          <img className="card-image" src={defaultImg} alt='defaultImg'/>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
          <button>
              See More
          </button>
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
                    <TextField value={loginemail} onChange={e=>setLoginEmail(e.target.value)} sx={{ m: 1, width: '25ch' }} id="filled-basic" placeholder='Email' variant="filled" />
            <form sx={{ m: 1, width: '25ch' }}  variant="filled">
            <InputLabel htmlFor="filled-adornment-password"></InputLabel>
          <FilledInput value={loginPassword} onChange={e=>setLoginPassword(e.target.value)} placeholder='Password'
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
        <Button variant="contained" onSubmit={Login} sx={{backgroundColor:"#6b7a6b",margin:"1rem", width:"75%",'&:hover': {
            backgroundColor: '#889b88',
          }}} style={{fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",color:"#E4E4D0"}} >Login</Button>
        {/* <Button variant="contained" sx={{backgroundColor:"#6b7a6b", width:"75%",'&:hover': {
            backgroundColor: '#889b88',
          }}}style={{fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",color:"#E4E4D0"}}>With <img src={google} alt="google"className='googleImg' /></Button> */}
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
                    <TextField sx={{ m: 1, width: '25ch' }} id="filled-basic personEmail" placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}  variant="filled" />
            <form sx={{ m: 1, width: '25ch' }} variant="filled" onSubmit={Register}>
            <InputLabel htmlFor="filled-adornment-password"></InputLabel>
          <FilledInput placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}
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
        <Button variant="contained" onClick={Register} sx={{backgroundColor:"#555843",margin:"1rem", width:"75%",color:"#E4E4D0",fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",
          '&:hover': {
            backgroundColor: '#7e8364',
          }}}  >Register</Button>
        {/* <Button variant="contained" sx={{backgroundColor:"#555843", width:"75%",color:"#E4E4D0",fontFamily:"'DM Serif Display', serif",fontSize:"1.2rem",
          '&:hover': {
            backgroundColor: '#7e8364',
          }
      }}>With <img src={google} alt="google"className='googleImg' /></Button> */}
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