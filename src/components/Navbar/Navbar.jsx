import React from 'react';
import "../Navbar/Navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Navbar = () => {
  return (
    <div>
        <div id="navWrap">
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#E4E4D0"}} className='Navbar'>
        <Toolbar variant="dense">
          <Typography variant="h4" component="div" className='Navbar'>
            HilitoBlog
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  <div id="verticalNavWrap">
    <div className="verticalNav">
      <div className="siteNavLabel  text-center">About Us</div>
      {/* <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="jumboHeading">About Us</h2>
              <p className="pt-4 ps-4 pe-4">
                A mobile app to register users's entry exit. Designed and
                developed by Siva Kishore G.
              </p>
              <div className="ms-4">
                <button className="btn btn-info">Download now</button>
              </div>
            </div>
            <div className="col">
              <div>
                <a href="#" className="subNavMenu">
                  Blog
                </a>
              </div>
              <div>
                <a href="#" className="subNavMenu">
                  Contact Us
                </a>
              </div>
              <div>
                <a href="#" className="subNavMenu">
                  Subscribe
                </a>
              </div>
              <div>
                <a href="#" className="subNavMenu">
                  Partners
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className="verticalNav">
      <div className="siteNavLabel text-center">Pricing</div>
      {/* <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="jumboHeading">Pricing</h2>
              <p className="p-4">
                Create upto 5 locations and 30 days of backup for free users.
              </p>
            </div>
            <div className="col">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-header bg-info">PREMIUM</div>
                <div className="card-body">
                  <h5 className="card-title" />
                  <ul className="card-text list-unstyled">
                    <li>Upto 20 Locations</li>
                    <li>1 Year Data</li>
                    <li>Separate App</li>
                    <li>Zero Ads</li>
                    <li>Unlimited popups</li>
                  </ul>
                </div>
                <div className="card-footer bg-dark text-white">2000 INR</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className="verticalNav text-center text-white">
      <div className="siteNavLabel">Services</div>
      {/* <div className="navContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto">
              <h2 className="jumboHeading">Services</h2>
              <p className="p-4">
                Servicing apartments, restaurants, hotels &amp; businesses
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar