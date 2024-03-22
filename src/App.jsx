import { Route, Routes, useLocation } from 'react-router-dom'
// import './App.css'
import Home from "./Pages/Home"
import Submissions from "./Pages/Submissions"
import Papers from "./Pages/Papers"
import Editorial from "./Pages/Editorial"
import Dashboard from "./Pages/Dashboard"
// import Announcement from "./Pages/Announcements"
// import Archive from "./Pages/Archive"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Faqs from "./Pages/Faqs"
import Header from './Components/Header'
import Register from './Pages/Register'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import Login from './Pages/Login'
import AdminDashBoard from './Pages/AdminDashboard'
import api from './api/Api'

export const userContext = createContext()

function App() {
  const location = useLocation()

  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true

  useEffect(() => {
    api.get('/user')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <userContext.Provider value={user} className='App'>
        {
          location.pathname != '/login' && location.pathname != '/register' && location.pathname != '/dashboard' ? <Header /> : <></>
        }
        {/* <Register/> */}
        {/* <Publication/> */}
        {/* < Login/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/papers' element={<Papers />} />
          <Route path='/editorial' element={<Editorial />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          {/* <Route path='/announcement' element={<Announcement />} /> */}
          {/* <Route path='/archive' element={<Archive />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </userContext.Provider>
  )
}

export default App;
