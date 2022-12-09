import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import video  from '../../img/travel.mp4'
import './Main.css'

const Main = () => {
  return (
    <>
      <div className="main">
        <video autoPlay loop muted id='video' >
           <source src={video} type='video/mp4'/>
        </video>
        <div className="overlay">
        <div className="content">
          <h1>First Class Travel</h1>
          <h3>Top 1% Locations Worldwide</h3>
          <form className='form'>
            <div>
            <input type="text" placeholder='Search Destinations' />
            </div>
            <div>
              <button className='search-b'><AiOutlineSearch className='icon'/></button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Main
