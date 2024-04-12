import { Route, Routes, useLocation } from 'react-router-dom'
// import './App.css'
import Home from "./Pages/Home"
import Submissions from "./Pages/Submissions"
import Publications from "./Pages/Publications"
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
import Permission from './Pages/Permission'
import Profile from './Pages/Profile'
import PDFViewer from './Pages/PDFViewer'
import GuideForAuthors from './Pages/GuideForAuthors'
import CurrentJournal from './Pages/CurrentJournal'
import LogoBar from './Components/LogoBar'
import Footer from './Components/Footer'

export const userContext = createContext()

function App() {
  const location = useLocation()

  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true

  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    api.get(`/user/${token}`, {headers: {'Authorization': `Bearer ${token}`}})
    .then(user => {
      setUser(user.data)
    })
    .catch(err => {
      if (err.response && err.response.status === 500) {
        return;
      }
    })
  }, [])

  return (
    <userContext.Provider value={user} className='App'>
              {/* {
          location.pathname != '/login'
          && location.pathname != '/register'
          // && location.pathname != '/dashboard'
          // && location.pathname !='/admindashboard'
          && location.pathname != '/permission'
          && location.pathname != '/submissions'
          && location.pathname != '/profile'
          ? <LogoBar /> : <></>
        } */}
        {
          location.pathname != '/login'
          && location.pathname != '/register'
          // && location.pathname != '/dashboard'
          // && location.pathname !='/admindashboard'
          // && location.pathname != '/permission'
          // && location.pathname != '/submissions'
          && location.pathname != '/profile'
          ? <Header /> : <></>
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/guide' element={<GuideForAuthors />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/editorial' element={<Editorial />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/currentjournal" element={<CurrentJournal />} />
          <Route path='/permission' element={<Permission />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/pdfviewer' element={<PDFViewer />} /> */}
        </Routes>
        {
          location.pathname != '/login'
          && location.pathname != '/register'
          // && location.pathname != '/dashboard'
          // && location.pathname !='/admindashboard'
          // && location.pathname != '/permission'
          // && location.pathname != '/submissions'
          && location.pathname != '/profile'
          ? <Footer /> : <></>
        }
    </userContext.Provider>
  )
}

export default App;
