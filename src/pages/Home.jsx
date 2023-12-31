import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

import '../style/Homestyle.css';
const Home = () => {
  return (
    <>
      <Layout>
      <div className="home" style={{backgroundImage:`url("../images/back.jpg")`}}>
        <div className="headercontainer">
          <h1>Food Delivery Website</h1>
          <p>Best Food in India, Try It Now </p>
          <Link to={"/menu"}>
              <button>Order Now</button>
          </Link>
          
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Home;