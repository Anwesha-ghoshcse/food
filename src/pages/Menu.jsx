import React from 'react'
import '../style/Menustyle.css';
import Gallery from '../Data/Gallery'
import Layout from '../components/Layout'
import { useState } from 'react';

const Menu = () => {
  const [item, setitem] = useState(Gallery);
  const filterItem=(cate)=>{
    const updateItems= Gallery.filter((Currele)=>{
      return Currele.category === cate;
    });
    setitem(updateItems);
  }
  return (
    <>
      <Layout>
        <div className='main'>
          <h1 className=' text-center text-black main-heading fw-bold'>Order Your Favourite Dish</h1>
          <hr />
          <div className='menu container'>
            <div className='menu-tab d-flex justify-content-around'>
              <button className='btn btn-warning' onClick={()=>filterItem('breakfast')}> Breakfast</button>
              <button className='btn btn-warning' onClick={()=>filterItem('lunch')}> Lunch</button>
              <button className='btn btn-warning'onClick={()=>filterItem('evening')}> Evening</button>
              <button className='btn btn-warning'onClick={()=>filterItem('dinner')}> Dinner</button>
              <button className='btn btn-warning'onClick={()=>setitem(Gallery)}> All</button>
            </div>

          </div>
          <div className='menu-items container-fluid mt-5 '>
            <div className='row '>
              <div className='col-11 mx-auto '>
                <div className='row my-5 d-flex justify-content-center align-content-center '>
                  {
                    item.map((elem) => {
                      const { id, image, name, price, description } = elem;

                      return (
                        <>
                          <div className='item1 col-11  col-md-5 col-lg-5 mx-lg-2 mx-md-2 col-xl-3 mx-xl-3 my-2 '>
                            <div className='row item-inside '>
                              <div className='col-12 col-md-12 col-lg-4 img-div'>
                                <img src={image} alt={name} className='img-fluid rounded' />
                              </div>
                              <div className='col-12 col-md-12 col-lg-8'>
                                <div className='main-title pt-4 pb-3'>
                                  <h1>{name}</h1>
                                  <p>{description}</p>
                                </div>
                                <div className='menu-price-book '>
                                  <div className='price-book-divide d-flex justify-content-between'>
                                    <h2>price: {price}</h2>
                                    <a href='#'>
                                      <button className='btn btn-primary'>Order Now</button>
                                    </a>
                                  </div>
                                  <p>prises is vary on different dates</p>
                                </div>

                              </div>
                            </div>

                          </div>

                        </>
                      )
                    })
                  }


                </div>

              </div>

            </div>

          </div>
        </div>
      </Layout>

    </>
  )
}
export default Menu;

