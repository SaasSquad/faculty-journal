const SubmittedJournals = () => {
    return ( 
    <>
    <div className="bg-[#BDADAD] px-[10px] py-[10px]">
      <ul>
        <li className="bg-[#D9D9D9] flex flex-row px-[10px] py-[10px]">
        <div className="ml-[5px]">
          <h2 className="font-bold">title</h2>
          <p className="text-[10px] mt-[10px]">Author:</p>
          <p className="text-[10px] mt-[10px]">Date:</p>
          <button className="bg-[#2516D4] px-[15px] py-[5px] text-[10px] mt-[10px] font-bold text-white">READ</button>
        </div>
        <div className="ml-auto flex flex-col">
          <button className="bg-[#00BF35] px-[20px] py-[10px] text-white text-[10px]">APPROVE</button>
          <button className="bg-[#BF0000] px-[20px] py-[10px] text-white text-[10px] mt-[10px]">DECLINE</button>
        </div>
        </li>
      </ul>
    </div>
    </> );
}
 
export default SubmittedJournals;