const GetUser = () => {
    return ( <>
    <div className="pt-[30px]">
        <input type="text" className="w-[60vw] bg-[#D9D9D9]  py-[10px] px-[10px] rounded-xl lg:w-[70vw]" />
        <button className="bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-[white]">Make admin</button>
        <div className="bg-[#BDADAD] px-[10px] py-[10px] mt-[5vh]">
            <ul>
                <li className="flex flex-row px-[10px] py-[10px] bg-[#D9D9D9]">
                    <div>
                        <p>Full Name:</p>
                        <p>Email:</p>
                        <p>Academic Status:</p>
                        <p>Current Role:</p>
                    </div>
                    <button className="ml-auto bg-[#2516D4] px-[5px] py-[1px] h-[30px] mt-[20px] text-[10px] rounded-xl text-[white]">Make Admin</button>
                </li>
            </ul>
        </div>
    </div>
    </> );
}
 
export default GetUser;