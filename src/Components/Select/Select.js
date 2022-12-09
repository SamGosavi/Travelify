import React from 'react';
import './Select.css'
// import belgium from '../../img/belgium.jpg'
import borabora from '../../img/borabora.jpg'
import hallstatt from '../../img/hallstatt.jpg'
import shimla from '../../img/shimla.jpg'
import norway from '../../img/norway.jpg'
import spain from '../../img/spain.jpg'
import singapore from '../../img/singapore.jpg'
import SelectImg from '../SelectImg/SelectImg';

const Select = () => {
  return (
    <div name='views' className='selects'>
        <div className="container">
          <SelectImg bgImg={hallstatt}  text='Hallstatt'/>
          <SelectImg bgImg={shimla}  text='Shimla'/>
          <SelectImg bgImg={borabora}  text='Borabora'/>
          <SelectImg bgImg={norway}  text='Norway'/>
          <SelectImg bgImg={spain}  text='Spain'/>
          <SelectImg bgImg={singapore}  text='Singapore'/>
        </div>
    </div>
  )
}

export default Select
