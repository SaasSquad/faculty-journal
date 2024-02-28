
import React, { useState } from 'react';
import Switch from "react-switch";


function Publication() {
  const [user, setUser] = useState({ name: 'John Doe' });
  const [journals, setJournals] = useState([
    { id: 1, title: 'Journal 1', content: 'Lorem ipsum...' },
    { id: 2, title: 'Journal 2', content: 'Lorem ipsum...' },
    // Add more journals as needed
  ]);
  const [darkMode, setDarkMode] = useState(false);
  //Adding header message
  const Header = ({user}) => {
    return (
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">Welcome, {user.name}</h1>
        </header>
      );
  }
//Adding DarkModeToggle
  const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-end p-4">
      <label htmlFor="darkModeToggle" className="mr-2">
        Dark Mode
      </label>
      <Switch
        id="darkModeToggle"
        checked={darkMode}
        onChange={setDarkMode}
        onColor="#2b6cb0"
        offColor="#718096"
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={40}
        className="react-switch"
      />
    </div>
  );
};

  //Adding JournalGrid
  const JournalGrid = ({ journals }) => {
    return (
      <div className="bg-gray-200 p-4">
        <div className='flex justify-around'> 
          <p className='font-bold'>YOUR PUBLICATIONS</p>
          <button className='rounded-2xl px-5 py-3 bg-blue-800 mb-5'>Add</button>
        </div>

        <div className="flex flex-col">
          {journals.map((journal) => (
            <div key={journal.id} className="bg-white p-4 mb-4">
              <h2 className="text-lg font-semibold">{journal.title}</h2>
              <p className="mt-2">{journal.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  

  



  return (
    <div className={darkMode ? 'bg-black ' : ''}>
      <Header user={user} />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <JournalGrid journals={journals} />
    </div>
  );
}

export default Publication;
