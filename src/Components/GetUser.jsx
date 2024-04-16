import { useEffect, useState } from "react";
import api from "../api/Api";

const GetUser = () => {
    const [searchQuery, setSearchQuery] = useState()
    const [user, setUser] = useState()

    const handleSubmitSearch = () => {
        const token = localStorage.getItem('jwt_token')
        api.get(`/getUser/${token}?search=${searchQuery}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(user => {
                console.log(user.data)
                setUser(user.data)
            })
            .catch(err => {
                if (err.response && err.response.status === 500) {
                    return;
                }
            })
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const makeAdmin = (id) => {
        const token = localStorage.getItem('jwt_token')
        api.put(`/assignadmin/${token}?id=${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                window.location.href = '/permission'
            }).catch(
                err => {
                    if (err.response && err.response.status === 500) {
                        return;
                    }
                }
            )
    }

    return (<>
        <div className="pt-[30px]">
            <p className="text-md font-semibold mb-2">Please input the user's email below to search for their account and grant them editor privileges.</p>
            <div className="flex justify-between w-[100%]">
                <input type="text" onChange={(e) => handleSearch(e)} placeholder="Enter Email Address" className="w-[88%] outline-none mr-4 bg-[#D9D9D9] py-3 px-4 rounded-lg" />
                <button onClick={handleSubmitSearch} className="bg-[#2516D4] font-bold py-3 px-4 text-[12px] rounded-lg text-[white]">Search</button>
            </div>
            {user &&
                <div className="bg-[#BDADAD] px-[10px] py-[10px] mt-[5vh]">
                    <ul className="flex justify-between items-center px-[10px] py-[10px] bg-[#D9D9D9]">
                        {
                            user.map(user => (
                                <li key={user._id} >
                                    <p>Name: {user.firstName} {user.lastName}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Role: {user.role}</p>
                                    <button onClick={() => makeAdmin(user._id)} className="font-bold bg-[#2516D4] text-center block px-3 py-3 mt-[20px] text-xs rounded-lg text-[white]">Make Admin</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    </>);
}

export default GetUser;