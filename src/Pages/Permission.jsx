import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import api from '../api/Api';
import { Link } from 'react-router-dom';
import GetUser from '../Components/GetUser';
import CurrentAdmin from '../Components/CurrentAdmins';
import DashboardHeader from '../Components/DashboardHeader';
import { userContext } from '../App';

const Permission = () => {
  const user = useContext(userContext)


  return (
    <>
    <div>
    <DashboardHeader user={user} />
    </div>
    <div className='mb-10 px-[10vw] pt-[20px] flex flex-col'>
        <button className='ml-auto bg bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-white '><Link to="/admindashboard">Dashboard</Link></button>
        <div>
            <p className='font-bold text-lg text-center'>PERMISSION</p>
            <GetUser />
            <CurrentAdmin />
        </div>
    </div>
    </>
  );
}
 
export default Permission;