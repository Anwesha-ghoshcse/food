import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <>
    <Layout>
    <Box  sx={{my:"8rem",textAlign:"center",p:"1rem", height:"90vh",
              "& h4":{
                fontWeight:"bold",
                my:"1.5rem",
                fontSize:"3rem"
                },
                "& p":{
                  textAlign:"justify"
                },
                "@media (max-width:600px)":{
                  mt:"0px"
                }}}    >
      <Typography variant='h4'>
        Welcome to My Resturant 
      </Typography>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius odit neque, voluptatem maiores fugiat, incidunt mollitia repellat quia rerum recusandae corporis laudantium culpa a quaerat eveniet facilis suscipit. Vitae repellendus ut impedit, repellat molestias suscipit cupiditate voluptatibus accusantium obcaecati aperiam, porro expedita odio nostrum iure totam ab quam? Minus earum similique ut enim sit fuga magni perspiciatis est voluptas alias commodi eveniet aut dolore, porro ipsum numquam eligendi voluptates quam possimus accusamus id. A quo eos commodi nostrum, labore autem saepe aspernatur? Magnam sint architecto, aut facilis iusto nam recusandae ducimus quo non dolore, esse consectetur, itaque numquam ut?
      </p>
      <br/>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati non quo, consequuntur et porro autem, tenetur minus a odit quisquam saepe? Quia possimus ipsam earum cum praesentium aut corporis rem fuga. Commodi laborum suscipit consectetur ab dolore et voluptas magni molestias nostrum mollitia corrupti, adipisci ipsam odit harum nisi non illo necessitatibus ratione animi architecto! Accusantium velit inventore laborum alias itaque cum. Praesentium rem tenetur cumque quibusdam nisi libero doloribus laboriosam numquam magni reiciendis quos dignissimos porro, impedit nobis illum est debitis quas placeat molestias doloremque necessitatibus autem sunt. Minima iusto quia dignissimos ut. Aliquam incidunt eius debitis nam officiis.
      </p>
    </Box>
    </Layout>
    
      
    </>
  )
}

export default About;