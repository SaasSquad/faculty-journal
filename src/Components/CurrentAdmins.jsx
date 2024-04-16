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

    const removeAdmin = (id) => {
        const token = localStorage.getItem('jwt_token')
        api.put(`/disadmin/${token}?id=${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                console.log("success")
                window.location.href = '/permission'
            }).catch(
                err => {
                    if (err.response && err.response.status === 500) {
                        return;
                    }
                }
            )
    }

    return (
        <>
        <p className="text-md font-semibold mt-10 mb-4">Here is the list of individuals who serve as editors.</p>
            <div className="bg-[#BDADAD] px-[10px] py-[10px]">
                <ul>
                    {
                        adminUsers &&
                        adminUsers.map(adminUser => (
                            <li key={adminUser._id} >{adminUser.role === 'admin' &&
                                <div className="flex flex-col justify-between mb-2 bg-[#D9D9D9] py-[10px] px-[10px]">
                                    <p>Name: {adminUser.firstName} {adminUser.lastName}</p>
                                    <p className="">Email: {adminUser.email}</p>
                                    <p>Role: editor</p>
                                    <button onClick={() => removeAdmin(adminUser._id)} className="bg-[#BF0000] rounded-md mt-4 py-1 h-10 text-xs text-[white]">Remove</button>
                                </div>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>);
}

export default CurrentAdmin;