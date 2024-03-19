
import React, { useState } from 'react';
import Publication from '../Components/Publication';

const Papers = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // You can add additional logic here, like filtering data based on the search term
      };

  return (
    <>
     <section className="search_section mb-64">
     <h1 className="text-4xl md:text-6xl text-center my-24 font-bold text-[#0000ff]">
        Find Publications
      </h1>
      <div className="text-center m-auto flex justify-center ">
      <input className="sm:text-2xl md:text-4xl border-4 border-[#0000ff] py-2 pl-4 rounded-tl-full rounded-bl-full"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for an article or journal"
      />
      <button className="bg-[#0000ff] py-2 px-12 font-bold text-white rounded-tr-full rounded-br-full">Search</button>
    </div>
     </section>
    <section className='m-5'>
    <Publication title="Lorem Ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur eius dicta quam harum, odio voluptatibus iure nostrum illo, nihil cum magnam quaerat error dolores officiis maxime? Fuga, animi cumque." author="John Doe" date="23-04-02" />
    <Publication title="IoT based Telecom Radio" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur eius dicta quam harum, odio voluptatibus iure nostrum illo, nihil cum magnam quaerat error dolores officiis maxime? Fuga, animi cumque." author="Jane Doe" date="23-04-02" />
    <Publication title="Implementing Search Algorithms" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur eius dicta quam harum, odio voluptatibus iure nostrum illo, nihil cum magnam quaerat error dolores officiis maxime? Fuga, animi cumque." author="Jackson Doe" date="23-04-02" />
   
    </section>
    </>
  );
};

export default Papers;
