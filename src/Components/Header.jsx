import { useState } from 'react';
import Navbar from './NavBar';
import logo from '../assets/Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false)
    return (
        <header className="relative z-50  text-[#f3f3f5] font-bold opacity-100 bg-[#254385] box-border">
            <div className={`flex justify-between md:justify-evenly items-center `}>
                <div className='md:flex ml-10 items-center justify-center'>
                    <a href="/" className="logo">
                        <img
                            alt="Logo"
                            className="w-[20px] transform rotate-90 box-border m-auto"
                            src={logo}
                        />
                    </a>
                </div>


                <div className='hidden md:flex ml-28'>
                    <Navbar />
                    {/* <FontAwesomeIcon icon={faCartShopping} className='text-xl mr-6 hover:text-blue-600 cursor-pointer'/> */}
                </div>
                <div className='md:flex hidden'>
                    <Link to={'/register'} className="hover:text-blue-600">REGISTER/LOGIN</Link>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl ml-5 hover:text-blue-600 cursor-pointer' />
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
                        <Link to={'/register'} className="absolute left-32 mt-56 hover:text-blue-600">REGISTER/LOGIN</Link>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl ml-5 hover:text-blue-600 cursor-pointer' /> */}
                    </div>
                </>
            }
        </header>
    );
};

export default Header



