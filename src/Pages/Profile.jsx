import { Link } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader";
import { useContext } from "react";
import { userContext } from "../App";

const Profile = () => {
    const user = useContext(userContext)

    return ( 
        <>
        <DashboardHeader user={user}/>
        <section className="bg-white h-[100vh] p-4 md:px-32 md:py-16">
            <div className="flex justify-between">
                <h2 className="text-xl md:text-2xl font-bold">Your Profile</h2>
                <Link to='/dashboard' className="mb-[30px] round-[20px] bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-[white]">Dashboard</Link>
            </div>
            <div className="bg-[#D9D9D9] rounded-md h-60 py-[20px] px-[20px]">
                <p className="font-bold border-b-2">First Name: {user.firstName}</p>
                <p className="font-bold border-b-2 mt-[20px]">Last name: {user.lastName}</p>
                <p className="font-bold border-b-2 mt-[20px]">Email: {user.email}</p>
                <p className="font-bold border-b-2 mt-[20px]">Academic status: {user.academicStatus}</p>
            </div>
        </section>
        </>
     );
}
 
export default Profile;