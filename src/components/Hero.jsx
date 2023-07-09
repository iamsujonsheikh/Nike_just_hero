import React from 'react'
import Flipcart from "../assets/flipkart.png";
import Amazon from "../assets/amazon.png";
import Shoe from "../assets/shoe_image.png";

const Hero = () => {
    return (
        <main className='hero'>
            <section>
                <h1 className='hero-h1'>YOUR FEET
                    DESERVE
                    THE BEST</h1>

                <p className='sub-tittle'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className='dual-btn'>
                    <button className='btn-shop'>Shop Now</button>
                    <button className='btn-catg'> Category</button>
                </div>
                <p className='also'>Also Available On</p>

                <div className='dual-img'>
                    <img src={Flipcart} alt="flipcart" />
                    <img src={Amazon} alt="amazon" />
                </div>
            </section>

            <section className='shoe'>
                <img src={Shoe} alt="shoe" />
            </section>
        </main>
    )
}

export default Hero