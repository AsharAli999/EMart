import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <div className ='Hero'>
        <div className="card bg-dark text-white">
  <img src="img2.jpg" className="card-img" alt="..." height="820px" />
  <div className="card-img-overlay d-flex flex-column"  >

<div className="container">


    <h5 className="card-title display-3 fw-bolder mb-5 mt-5">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2 mb-5"> CheckOut All the Trends</p>
</div>

    
  </div>
</div>
        </div>

        <Products/>
    </div>
  )
}

export default Home