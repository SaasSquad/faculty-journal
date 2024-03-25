const GetUser = () => {
    

    return (<>
        <div className="pt-[30px]">
            <div className="flex justify-between w-[100%]">
                <input type="text" placeholder="Enter Email Address" className="w-[88%] outline-none mr-4 bg-[#D9D9D9] py-3 px-4 rounded-lg" />
                <button className="bg-[#2516D4] font-bold py-3 px-4 text-[12px] rounded-lg text-[white]">Make admin</button>
            </div>
            <div className="bg-[#BDADAD] px-[10px] py-[10px] mt-[5vh]">
                <ul>
                    <li className="flex justify-between items-center px-[10px] py-[10px] bg-[#D9D9D9]">
                        <div>
                            <p>Full Name:</p>
                            <p>Email:</p>
                            <p>Academic Status:</p>
                            <p>Current Role:</p>
                        </div>
                        <button className="font-bold bg-[#2516D4] text-center px-3 py-3 mt-[20px] text-xs rounded-lg text-[white]">Make Admin</button>
                    </li>
                </ul>
            </div>
        </div>
    </>);
}

export default GetUser;