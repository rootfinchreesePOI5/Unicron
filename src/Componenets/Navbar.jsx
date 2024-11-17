import React from 'react'
import logo from '../assets/icon.svg'
import search from '../assets/search.svg'
import more from '../assets/more.svg'
import Pic from '../assets/Profile.jpg';

import message from '../assets/message.svg'
import paper from '../assets/paper.svg'
import like from '../assets/like.svg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <nav>
            <div className="nav-items">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="" />
                </div>
            </div>
            <div className="profile">
                <img src={Pic} alt="" />
                <div className="user-dets">
                    <h5>@abdiazizM</h5>
                    <p>Abdiaziz Mohamed</p>
                </div>
                <Link to='/profile'><img src={more} alt="" /></Link>
            </div>
            <div className="Activity">
                <img src={like} alt="" />
                <img src={paper} alt="" />
                <img src={message} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
