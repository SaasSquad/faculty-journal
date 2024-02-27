// import { useState } from 'react';
// import Navbar from './NavBar';
// //import logo from '../assets/Images/Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     const [mobileDropdown, setMobileDropdown] = useState(false)
//     return (
//         <header className="relative z-50 bg-white text-[#072975] font-bold py-4 md:px-10">
//             <div className={`flex justify-between items-center px-4`}>
//                 <a href="/" className="logo">
//                     <img alt="Logo"
//                         className="w-24 h-12" src={logo} />
//                 </a>
//                 <div className='hidden md:flex'>
//                     <Navbar />
//                     <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl mr-6 hover:text-blue-600 cursor-pointer'/>
//                     <FontAwesomeIcon icon={faCartShopping} className='text-xl mr-6 hover:text-blue-600 cursor-pointer'/>
//                 </div>
//                 {
//                     mobileDropdown ?
//                         <button className='flex md:hidden' onClick={() => setMobileDropdown(false)}>
//                             <FontAwesomeIcon icon={faX} />
//                         </button>
//                         :
//                         <button className='flex md:hidden' onClick={() => setMobileDropdown(true)}>
//                             <FontAwesomeIcon icon={faBars} />
//                         </button>
//                 }
//             </div>
//             {
//                 mobileDropdown &&
//                 <div className='absolute py-4 bg-[#072975] text-white w-[100%] flex md:hidden'>
//                     <Navbar mobileDrop="mobileDrop" />
//                 </div>
//             }
//         </header>
//     );
// };

// export default Header

import React from 'react';

 const Header = ({ menuItems }) => {
    return (
        <nav>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <a href={menuItem.url}>{menuItem.title}</a>
                        {menuItem.submenu && (
                            <ul>
                                {menuItem.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.url}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;



