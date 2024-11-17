import React, { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import UserProfile from './Componenets/UserProfile'
import Profile from './Pages/Profile'
import Intro from './Pages/Intro'

function App() {
  const [login , setLogin] = useState(3)
  if(login === 3){
    return (
      <BrowserRouter>
        <Intro login={login} setLogin={setLogin}/>
      </BrowserRouter>
    )
  }else if(login === 2){
    return (
      <BrowserRouter>
        <UserProfile login={login} setLogin={setLogin} />
      </BrowserRouter>
    )
  }
  else{
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
