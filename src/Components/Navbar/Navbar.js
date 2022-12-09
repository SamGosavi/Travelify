import React, { useState } from 'react';
import { BsSearch, BsPersonFill,BsList, BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import './Navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {

  const[nav,setNav]= useState(false);
  const handleNav =()=>setNav(!nav);

  return (
    <>
    
     <div name='home' className={nav?"navbar navbar-bg":"navbar"}>
        <div className="logo">
          <h1 className='title'>TraVelify</h1>
          <h3 className='tag-line'>Travel to Explore</h3>
        </div>
        <ul className='nav-menu'>
          <Link to='home'><li>Home</li></Link>
          <Link to='destinations' smooth='true' duration={500}><li>Destinations</li></Link>
          <Link to='carousel' smooth='true' duration={500}><li>Travel</li></Link>
          <Link to='search' smooth='true' duration={500}><li>Book</li></Link>
          <Link to='views'smooth='true' duration={500}><li>Views</li></Link>
        </ul>
        <div className="nav-icons">
         <BsSearch className='icon'/>
         <BsPersonFill className='icon'/>
        </div>
        <div className='three-bar' onClick={handleNav}>
        <AiOutlineClose className={nav?'close': 'close-none'}/>
         <BsList className={!nav?'bars':'bars-none'}/>
        </div>

        <div className={nav?"mob-menu active":"mob-menu" }>
         <ul className='mob-nav'>
         <Link to='home'><li>Home</li></Link>
          <Link to='destinations' smooth='true' duration={500}><li>Destinations</li></Link>
          <Link to='carousel' smooth='true' duration={500}><li>Travel</li></Link>
          <Link to='search' smooth='true' duration={500}><li>Book</li></Link>
          <Link to='views'smooth='true' duration={500}><li>Views</li></Link>
        </ul>
        

         <div className="mob-search-acc">
          <button className='btn btn-primary'>Search</button>
          <button className='btn btn-primary'>Account</button>
         </div>

         <div className="social-icons">
          <BsInstagram className='icon'/>
          <BsFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <BsPinterest className='icon'/>
          <BsYoutube className='icon'/>
         </div>
        </div>
        
     </div>
    
    </>
  )
}

export default Navbar
