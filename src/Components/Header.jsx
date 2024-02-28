import { useState } from 'react';
import Navbar from './NavBar';
import logo from '../assets/Images/logo.png'
import jlogo from '../assets/Images/jlogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false)
    return (
        <header className="relative z-50  text-[#f3f3f5] font-bold opacity-100 py-4 md:px-10 bg-[#254385] box-border">
            <div className={`flex justify-between items-center px-2`}>
               <div className='md:flex items-center justify-center mb-14 '>
                    <a href="/" className="logo">
                        <img
                            alt="Logo"
                            className="w-8 transform rotate-90 box-border m-auto"
                            src={logo}
                        />
                    </a>
               </div>


                <div className='hidden md:flex'>
                    <Navbar />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl mr-6 hover:text-blue-600 cursor-pointer'/>
                    {/* <FontAwesomeIcon icon={faCartShopping} className='text-xl mr-6 hover:text-blue-600 cursor-pointer'/> */}
                </div>
                {
                    mobileDropdown ?
                        <button className='flex md:hidden' onClick={() => setMobileDropdown(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        :
                        <button className='flex md:hidden' onClick={() => setMobileDropdown(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                }
            </div>
            {
                mobileDropdown &&
                <div className='absolute py-4 bg-[#072975] text-white w-[100%] flex md:hidden'>
                    <Navbar mobileDrop="mobileDrop" />
                </div>
            }
        </header>
    );
};

export default Header



