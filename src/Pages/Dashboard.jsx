

import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import api from '../api/Api';
import { Link } from 'react-router-dom';

function Dashboard() {

  const currentDate = new Date().toLocaleDateString('en-NG'); // 'en-NG' for English in Nigeria (West Africa)

  const [user, setUser] = useState({ name: 'Obaseki Samuel' });
  const [journals, setJournals] = useState([
    { id: 1, title: 'Journal 1', content: 'Lorem ipsum...',  date :currentDate, status: "Pending" },
    { id: 2, title: 'Journal 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', date : currentDate, status: "Pending",  },
    // Add more journals as needed, 
  ]);

  axios.defaults.withCredentials = true
    const handleLogout = () => {
        api.post('/signout')
            .then(res => {
                if (res.data === 'OK') {
                    window.location.to = '/'
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }

  const Header = ({ user }) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
    const profileDropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
          setShowProfileDropdown(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const toggleProfileDropdown = () => {
      setShowProfileDropdown(!showProfileDropdown);
    };
  
    return (
      <header className="bg-blue-800 px-4 md:px-32 text-white py-4 text-bold box-border">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Welcome, {user.name}</h1>
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={toggleProfileDropdown}
              onMouseEnter={() => setShowProfileDropdown(true)}
              className="text-white font-bold bg-[#d9d9d9] rounded-full px-4 py-2"
            >
              IMG
            </button>
            {showProfileDropdown && (
              <div
                className="absolute -right-2 md:-right-10 text-center mt-2 font-bold w-32 md:w-48 bg-white rounded-lg shadow-lg"
              >
                <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </Link>
                <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Dashboard
                </Link>
                <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Preferences
                </Link>
                <Link reloadDocument to="/"  onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  };
  
  

  const JournalGrid = ({ journals }) => {
    return (
      <div className="bg-[#ffffff] md:mx-24 p-4 md:px-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-xl md:text-2xl">YOUR PUBLICATIONS</p>
          <button className="rounded-lg px-4 md:px-8 py-2 text-white bg-[#2516d4] mt-4 md:mt-0">Publish</button>
        </div>
        <div className="bg-[#bdadad] mt-12 p-4 md:p-10">
          {journals.map((journal) => (
            <div key={journal.id} className="bg-[#d9d9d9] mt-2 p-4 md:py-10 md:px-16 mb-8 md:mb-20">
              <h2 className="text-lg md:text-xl font-semibold text-black">{journal.title}</h2>
              <p className="bg-[#d9d9d9] mt-4">{journal.content}</p>
              <div className="bg-[#d9d9d9] pt-10 pb-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg md:text-xl mb-6 font-semibold text-black">{journal.date}</p>
                <p className=" bg-yellow-700 rounded-md px-4 py-2 text-lg md:text-xl font-semibold text-black">{journal.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header user={user} />
      <JournalGrid journals={journals} />
    </div>
  );
}

export default Dashboard;

