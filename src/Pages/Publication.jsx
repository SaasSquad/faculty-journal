

import React, { useState, useRef, useEffect } from 'react';

function Publication() {

  const currentDate = new Date().toLocaleDateString('en-NG'); // 'en-NG' for English in Nigeria (West Africa)

  const [user, setUser] = useState({ name: 'Obaseki Samuel' });
  const [journals, setJournals] = useState([
    { id: 1, title: 'Journal 1', content: 'Lorem ipsum...',  date :currentDate, status: "Pending" },
    { id: 2, title: 'Journal 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', date : currentDate, status: "Pending",  },
    // Add more journals as needed, 
  ]);

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
      <header className="bg-blue-800 text-white p-4 text-bold box-border text-center">
        <div className="flex justify-between items-center">
          <h1 className="text-xl m-auto">Welcome, {user.name}</h1>
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={toggleProfileDropdown}
              onMouseEnter={() => setShowProfileDropdown(true)}
              className="text-white font-bold bg-[#d9d9d9] rounded-full p-3 md:p-4"
            >
              Settings
            </button>
            {showProfileDropdown && (
              <div
                className="absolute right-0 mt-12 w-48 bg-white rounded-lg shadow-lg"
              >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Dashboard
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Preferences
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  };
  
  

  const JournalGrid = ({ journals }) => {
    return (
      <div className="bg-[#ffffff] p-4 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-3xl md:text-4xl">YOUR PUBLICATIONS</p>
          <button className="rounded-3xl px-6 md:px-10 py-3 text-white bg-[#2516d4] mt-4 md:mt-0">Publish</button>
        </div>
        <div className="bg-[#bdadad] mt-4 p-4 md:p-10">
          {journals.map((journal) => (
            <div key={journal.id} className="bg-[#d9d9d9] mt-2 p-4 md:p-10 mb-8 md:mb-20">
              <h2 className="text-lg md:text-xl font-semibold text-black">{journal.title}</h2>
              <p className="bg-[#d9d9d9] mt-2 p-4 md:p-10">{journal.content}</p>
              <div className="bg-[#d9d9d9] md:p-10  flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg md:text-xl font-semibold text-black">{journal.date}</p>
                <p className=" bg-red-800 p-2 text-lg md:text-xl font-semibold text-black">{journal.status}</p>
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

export default Publication;

