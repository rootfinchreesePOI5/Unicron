import React from 'react'
import icon from '../assets/icon.svg'
import uni from '../assets/uni.svg'

function Intro({ login, setLogin }) {
    setTimeout(()=>{
        login === 3? setLogin(2) : setLogin(3)
    },10000)
  return (
    <div className='intro'>
        <div className="intro-container">
            <div className="App-logo">
                <img src={icon} alt="" />
            </div>
            <div className="made">
                <h5>from</h5>
                <div className="logo-name">
                    <img src={uni} alt="" />
                    <h3>Unicron</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro
