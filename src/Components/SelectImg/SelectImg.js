import React from 'react'
import './SelectImg.css'


const SelectImg = ({bgImg,text}) => {
  return (
    <div className='selects-locations'>
       <img src={bgImg} alt="" />
       <div className="overlay">
         <p>{text}</p>
       </div>
    </div>
  )
}

export default SelectImg;
