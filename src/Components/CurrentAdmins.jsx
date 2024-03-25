import { useEffect, useState } from "react";
import api from "../api/Api";

const CurrentAdmin = () => {
    const [adminUsers, setAdminUsers] = useState()

    useEffect(() => {
        const token = localStorage.getItem('jwt_token')
        api.get(`/users/${token}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                if (res.status === 200) {
                    setAdminUsers(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="bg-[#BDADAD] px-[10px] py-[10px] mt-[5vh]">
                <ul>
                    {
                        adminUsers &&
                        adminUsers.map(adminUser => (
                            <li key={adminUser._id} >{adminUser.role === 'admin' &&
                                <div className="flex justify-between mb-2 items-center bg-[#D9D9D9] py-[10px] px-[10px]">
                                    <p>Name: {adminUser.firstName} {adminUser.lastName}</p>
                                    <button className="bg-[#BF0000] rounded-md px-[10px] px-3 py-1 h-10 text-xs text-[white]">Remove</button>
                                </div>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>);
}

export default CurrentAdmin;