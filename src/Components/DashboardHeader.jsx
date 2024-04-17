import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/Api";
import defaultDP from '../assets/Images/defaultDP.png'

const DashboardHeader = ({ user }) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const profileDropdownRef = useRef(null);

    const handleLogout = () => {
        localStorage.clear()
        api.post('/signout')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err.message)
            })
    }

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
                <h1 className="text-xl">Welcome, {user.firstName} {user.lastName}</h1>
                <div className="relative" ref={profileDropdownRef}>
                    <button
                        onClick={toggleProfileDropdown}
                        onMouseEnter={() => setShowProfileDropdown(true)}
                        className="text-white font-bold bg-[#d9d9d9] rounded-full px-4 py-2"
                    >
                        <img
                            className="w-[20px] m-auto"
                            src={defaultDP} alt="" />
                    </button>
                    {showProfileDropdown && (
                        <div
                            className="absolute -right-2 md:-right-10 text-center mt-2 font-bold w-32 md:w-48 bg-white rounded-lg shadow-lg"
                        >
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
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
                            <Link reloadDocument to="/" onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader