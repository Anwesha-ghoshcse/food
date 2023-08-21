import { Box, IconButton, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:"center",bgcolor:"black",color:"white", padding:"3px"}}>
        <Box sx={{my:"1.3rem",
                "& svg":{
                    fontSize:"2rem",
                    cursor:"pointer",
                    mr:"1rem",
                    color:"white"
                },
                "& svg:hover":{
                    color:"goldenrod",
                    transform:'translateX(5px)',
                    transition:"all 400ms"

                }}}  >
            <InstagramIcon/>
            <TwitterIcon/>
            <IconButton href="https://github.com/Anwesha-ghoshcse" target="_blank">
        <GitHubIcon />
      </IconButton>
            <YouTubeIcon/>
        </Box>
        <Typography variant='h6'>
            All rights Reserved and &copy; Anwesha Ghosh 
        </Typography>
      </Box>
    </>
  )
}

export default Footer
