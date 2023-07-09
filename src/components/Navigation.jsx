import React from 'react'
import Logo from "../assets/brand_logo.png"

const Navigation = () => {
    return (
        <div>
            <nav className='nav'>
                <div>
                    <img className='' src={Logo} alt="logo_brand" />
                </div>

                <ul className='nav-list'>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button className='btn-login'>Login</button>
            </nav>
        </div>
    )
}

export default Navigation