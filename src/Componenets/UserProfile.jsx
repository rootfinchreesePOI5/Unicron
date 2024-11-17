import React, { useState } from 'react';
// import Pic from '../assets/Profile.jpg';
import at from '../assets/at.svg';
import lock from '../assets/lock.svg';
import empty from '../assets/empty.png';
import Btn from './Btn';

const UserProfile = ({ login, setLogin }) => {
    const [pickedImg, setPicked] = useState(empty); // Default image
    const [gender, setGender] = useState(''); // Track selected gender
    const [bio, setBio] = useState(''); // Track bio input
    const [email, setEmail] = useState(''); // Track email
    const [password, setPassword] = useState(''); // Track password

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPicked(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Profile Created Successfully!')
        login === 2 ? setLogin(1) : setLogin(2); // Close the profile creation form
    };

    return (
        <div className="Profile">
            <div className="profile-image">
                <div className="image">
                    <img
                        onClick={() => document.querySelector('input[type="file"]').click()}
                        src={pickedImg}
                        alt="Profile"
                    />
                </div>
                <div className="choose-file">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                        required
                    />
                </div>
            </div>
            <form className="profile-container" onSubmit={handleSubmit}>
                <div className="profile-items">
                    <div className="label">
                        <label>Email</label>
                        <div className="input">
                            <img src={at} alt="" />
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="label">
                        <label>Password</label>
                        <div className="input">
                            <img src={lock} alt="" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="Gender">
                        <label>Gender</label>
                        <div className="g-items">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <p>Male</p>
                        </div>
                        <div className="g-items">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <p>Female</p>
                        </div>
                    </div>
                    <div className="bio">
                        <label>Bio</label>
                        <input
                            type="text"
                            placeholder="Write something about yourself"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <Btn text={'Create Profile'}/>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
