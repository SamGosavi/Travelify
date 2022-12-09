import React from 'react'
import './ImgCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import shimla from '../../img/shimla.jpg'
import norway from '../../img/norway.jpg'
import spain from '../../img/spain.jpg'
import borabora from '../../img/borabora.jpg'

const ImgCarousel = () => {
    return (
       
        <div name='carousel' className="container">
            <Carousel className='Carousel' showArrows={false} autoPlay infiniteLoop>
                <div>
                    <img src={norway} alt="" />
                </div>
                <div>
                    <img src={shimla} alt=""/>
                </div>
                <div>
                    <img src={spain} alt="" />
                </div>
                <div>
                    <img src={borabora} alt="" />
                </div>
            </Carousel>
           
            
        </div>
    )
}

export default ImgCarousel
