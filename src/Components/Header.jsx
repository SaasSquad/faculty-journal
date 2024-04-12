import { useContext, useEffect, useRef, useState } from 'react';
import Navbar from './NavBar';
import logo from '../assets/Images/logo.png'
import defaultDP from '../assets/Images/defaultDP.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { userContext } from '../App';
import api from '../api/Api';

const Header = () => {
    const user = useContext(userContext)

    const [mobileDropdown, setMobileDropdown] = useState(false)
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleLogout = () => {
        localStorage.clear()
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

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

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

    return (
        <header className="relative z-50 text-[#f3f3f5] font-bold opacity-100 bg-[#254385] box-border h-[60px] pt-[15px]">
            <div className={`flex justify-between md:justify-evenly items-center `}>
                <div className='hidden md:flex ml-20 mt-0'>
                    <Navbar />
                </div>
                <div className='md:flex hidden items-center'>
                    {
                        user.firstName ? <div className="relative" ref={profileDropdownRef}>
                            <button
                                onClick={toggleProfileDropdown}
                                onMouseEnter={() => setShowProfileDropdown(true)}
                                className="text-white font-bold bg-[#d9d9d9] rounded-full md:px-4 md:py-2"
                            >
                                <img
                                    className="w-[20px] m-auto"
                                    src={defaultDP} alt="" />
                            </button>
                            {showProfileDropdown && (
                                <div
                                    className="absolute -right-10 text-center mt-2 font-bold w-48 bg-white rounded-lg shadow-lg"
                                >
                                    <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Profile
                                    </Link>
                                    {
                                        user.role === 'admin' ?
                                            <Link to="/admindashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Dashboard
                                            </Link>
                                            : <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Dashboard
                                            </Link>
                                    }
                                    <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Preferences
                                    </Link>
                                    <Link reloadDocument onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div> : <Link to={'/login'} className="hover:text-blue-600">REGISTER/LOGIN</Link>
                    }
                </div>
                {
                    mobileDropdown ?
                        <button className='flex md:hidden mr-5' onClick={() => setMobileDropdown(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        :
                        <button className='flex md:hidden mr-5' onClick={() => setMobileDropdown(true)}>

                            <FontAwesomeIcon icon={faBars} />
                        </button>
                }
            </div>
            {
                mobileDropdown &&
                <>
                    <div className='absolute bg-[#072975] h-64 text-white w-[100%] flex md:hidden'>
                        <Navbar mobileDrop="mobileDrop" />
                        {
                            user.firstName ? user.role === 'admin' ? <Link to={'/admindashboard'} className="absolute left-32 mt-56 hover:text-blue-600">{user.firstName} {user.lastName}</Link> :
                                <Link to={'/dashboard'} className="absolute left-32 mt-56 hover:text-blue-600">{user.firstName} {user.lastName}</Link> : <Link to={'/login'} className="absolute left-32 mt-56 hover:text-blue-600">REGISTER/LOGIN</Link>
                        }
                    </div>
                </>
            }
        </header>
    );
};

export default Header



