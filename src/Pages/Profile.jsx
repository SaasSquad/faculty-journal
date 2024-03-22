import { Link } from "react-router-dom";

const Profile = () => {
    return ( 
        <>
        <section className="bg-[#D9D9D9] h-[100vh] px-[10vw] py-[10vh]">
            <button className="mb-[30px] round-[20px] bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-[white]"><Link to='/dashboard'>Dashboard</Link></button>
            <div className="bg-white h-[80vh] py-[20px] px-[20px]">
                <p className="font-bold border-b-2">First Name:</p>
                <p className="font-bold border-b-2 mt-[20px]">Last name:</p>
                <p className="font-bold border-b-2 mt-[20px]">Email:</p>
                <p className="font-bold border-b-2 mt-[20px]">Academic status:</p>
            </div>
        </section>
        </>
     );
}
 
export default Profile;