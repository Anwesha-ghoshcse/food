import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from 'react-router-dom';
import '../style/Headerstyle.css';
import { Divider, Drawer } from '@mui/material';
const Header = () => {
  const [mobile,setmobile]= useState(false);
  const handledrawer=()=>{
    setmobile(!mobile)
  }
  const drawer =(
    <Box onClick={handledrawer} sx={{textAlign:'center'}}>
        <Typography
            color={"goldenrod"}
            variant='h6'
            component={"div"}
            sx={{flexGrow:1, my:2}}>My Resturant
            <FastfoodIcon/>
            <Divider/>
            </Typography>
            
                <ul className="navigation-mobile">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                </ul>
            
    </Box>
  )
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
        <IconButton 
          color='inherit' 
          aria-label='open-drawer' 
          edge='start' 
          sx={{mr:2, display:{sm:'none'}}}
          onAuxClick={handledrawer}>
          <MenuIcon/>
        </IconButton>
          <Typography
            color={"goldenrod"}
            variant='h6'
            component={"div"}
            sx={{flexGrow:1}}>My Resturant
            <FastfoodIcon/>
            </Typography>
            <Box sx={{display:{xs: "none",sm:"block"}}}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink to={"/"} activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"} >About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                </ul>
            </Box>
            
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer 
          variant='temporary' 
          open={mobile} 
          onClose={handledrawer}
          sx={{display:{xs:'block',sm:'none'},"@.MuiDrawer-paper":{
            boxSizing:'border-box',
            width:"280px",
          },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
    </Box>
    
      
    </>
  )
}

export default Header;