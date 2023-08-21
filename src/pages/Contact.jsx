import React from 'react'
import Layout from '../components/Layout'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, paperClasses } from '@mui/material';

const Contact = () => {
  return (
    <>
    <Layout>
    <Box sx={{height:"80vh",display:"flex",alignItems:"center", justifyContent:"center", flexDirection: 'column' }}>
    <Box sx={{my:"3rem",ml:"4rem",
    "& h4":{
            fontWeight:"bold",
            mb:"1.5rem",
            textAlign:"center"
    }}}>
      <Typography variant='h4' sx={{display:"flex",alignItems:"center", justifyContent:"center"}}>
        Contact Us
      </Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum fugiat labore  earum, cum distinctio enim illo unde animi cupiditate itaque harum debitis veritatis numquam nulla officia accusantium! Vero.</p>
    </Box>
    <Box sx={{m:"auto",width:"40rem",mt:"6rem",
              "@media (max-width:600px)":{
                  width:"20rem"
                }}}>
    <TableContainer component={Paper} >
    <Table aria-level={"content-table"}>
      <TableHead>
        <TableRow>
          <TableCell sx={{bgcolor:"black",color:"white",}} align='center'>
            Contact Details
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <SupportAgentIcon sx={{pt:"1",color:"red",height:"1.5rem",width:"2rem"}}/>1800-0000-5426(Toll-free)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <EmailIcon sx={{pt:"1",color:"skyblue",height:"1.5rem",width:"2rem"}}/>Anwesha05cse@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <PhoneIcon sx={{pt:"1",color:"green",height:"1.5rem",width:"2rem"}}/>9883787471
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    </TableContainer>
    </Box>
    </Box>
    </Layout>
      
    </>
  )
}

export default Contact;