import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import api from '../api/Api';
import { Link } from 'react-router-dom';
import SubmittedJournals from '../Components/SubmittedJournals';

const Submissions = () => {
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
                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
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

  return (
    <>
    <div>
      <Header user={user} />
    </div>
    <div className='w-[100vw] px-[10vw] pt-[20px] flex flex-col'>
        <button className='ml-auto bg bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-white '><Link to="/admindashboard">Dashboard</Link></button>
        <div>
            <p className='font-bold ml-[25vw] mb-[30px] lg:ml-[35vw] lg:mb-[50px]'>SUBMISSIONS</p>
            <SubmittedJournals/>
        </div>
    </div>
    </>
  );
}
 
export default Submissions;