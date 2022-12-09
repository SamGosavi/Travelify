 import React from 'react'
import './Destinations.css'
import belgium from '../../img/belgium.jpg'
import borabora from '../../img/borabora.jpg'
import hallstatt from '../../img/hallstatt.jpg'
import shimla from '../../img/shimla.jpg'
import norway from '../../img/norway.jpg'
import spain from '../../img/spain.jpg'
import singapore from '../../img/singapore.jpg'



const Destinations = () => {
  return (
    <div name='destinations' className='destinations'>
      <div className="container">
        <h1>Best Destinations To Visit</h1>
        <p>Explore the Exotic Places with us</p>
        <div className="img-container">
         <img src={hallstatt} className= 'span-3 image-grid-row-2' alt="Hallstatt,Austria" title='Hallstatt,Austria' />
         <img src={borabora} alt="Borabora,F.Polynesia" title='Borabora,F.Polynesia' />
         <img src={shimla} alt="Shimla,India" title='Shimla,India'/>
         <img src={spain} alt="Valencia,Spain" title='Valencia,Spain'/>
         <img src={singapore} alt="MarinaBay,Singapore" title='MarinaBay,Singapore'/>
         <img src={belgium} alt="Brussels,Belgium" title='Brussels,Belgium'/>
         <img src={norway} alt="Loften,Norway" title='Loften,Norway'/>


        </div>
      </div>
    </div>
  )
}

export default Destinations
