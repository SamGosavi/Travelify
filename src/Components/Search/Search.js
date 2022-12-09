import React from 'react'
import './Search.css'
import award from '../../img/award.png'

const Search = () => {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come and explore various exotic places with all-inclusive vacations for couples. Our luxury resorts set along with beautiful views and give you terrific experience of tourism. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui! Molestias perferendis dolores, dicta voluptas explicabo veniam rem accusantium quod? Assumenda praesentium, earum eum expedita magni perferendis neque quibusdam in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos officia rerum accusantium, quidem odit quaerat! Neque rem commodi sed? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quaerat cupiditate fuga, vero rerum aliquam nesciunt tenetur laborum dolore mollitia dolorem alias commodi quisquam quo sequi numquam totam hic cum.
                         </p>
                
                <div className="search-col">
                    <div className="box">
                        <div className='award'>
                           <img src={award} alt="" style={{ width: 170,height:155 }} />
                        </div>
                        <div>
                         <h3>WORLD'S LEADING</h3>
                           <p>All Inclusive Company For 20 years in-a-row. Because we offer best and hassle free travel experience.</p>
                        </div> 
                    </div>
                    <div className="box">
                        <div className='package'>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>All Inclusive Company For 20 years in-a-row</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h2 className='save'>GET AN ADDITIONAL 12% OFF </h2>
                        <p className='timer'>HURRY UP...Only 12Hrs LEFT</p>
                        <p className="offers">View Our Current Offers</p>
                    </div>
                    <form>
                        <div className="inputs">
                            <label htmlFor="">Destinations</label>
                            <select className='select'>
                                <option value="1">Select</option>
                                <option value="1">Hallstatt</option>
                                <option value="1">BoraBora</option>
                                <option value="1">Shimla</option>
                                <option value="1">Valencia</option>
                                <option value="1">Brussels</option>
                                <option value="1">Singapore</option>
                                <option value="1">Maldivs</option>
                                <option value="1">Hawaii</option>
                                <option value="1">Bali</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="inputs">
                                <label htmlFor="">Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button className='button-b'>Rates & Availabilties</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Search
