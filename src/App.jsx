import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home"
import Submissions from "./Pages/Submissions"
import Papers from "./Pages/Papers"
import Editorial from "./Pages/Editorial"
import Publication from "./Pages/Publication"
import Announcement from "./Pages/Announcements"
import Archive from "./Pages/Archive"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Faqs from "./Pages/Faqs"

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='./papers' element={<Papers />} />
          <Route path='./editorial' element={<Editorial />} />
          <Route path='./publication' element={<Publication />} />
          <Route path='./announcement' element={<Announcement />} />
          <Route path='./archive' element={<Archive />} />
          <Route path='./contact' element={<Contact />} />
          <Route path='./about' element={<About />} />
          <Route path='./faqs' element={<Faqs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
