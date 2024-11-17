import React from 'react'
import icon from '../assets/Profile.jpg';
import pen from '../assets/pen.svg'
import { Link } from 'react-router-dom';
function Profile() {
  return (
    <div className='ProfilePage'>
      <h1 className="heading">My profile</h1>
      <div className="user-info-container">
        <div className="user-items">
            <div className="user-p">
                <img src={icon} alt="" />
                <div className="user-name">
                    <h1>Abdiaziz Mohamed</h1>
                    <h3>@abdiazizM</h3>
                </div>
            </div>
            <div className="edit">
                <img src={pen} alt="" />
                <span>Edit</span>
            </div>
        </div>
        <div className="user-items">
            <div className="Personal">
            <h1 className="p-title">Personal Information</h1>
            <div className="label">
                <label htmlFor="">Email<span></span></label>
                
            </div>
            <div className="label">
                <label htmlFor="">Password<span></span></label>
                <h5></h5>
            </div>
            <div className="label">
                <label htmlFor="">Bio<span></span></label>
            </div>
            </div>
            <div className="edit">
                <img src={pen} alt="" />
                <span>Edit</span>
            </div>
        </div>
        <div className="btn">
            <Link to={'/'}><button>Go Back</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
