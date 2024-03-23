import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import api from '../api/Api';
import { Link } from 'react-router-dom';
import SubmittedJournals from '../Components/SubmittedJournals';
import DashboardHeader from '../Components/DashboardHeader';
import { userContext } from '../App';

const Submissions = () => {
  const user = useContext(userContext)

  return (
    <>
    <div>
    <DashboardHeader user={user} />
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