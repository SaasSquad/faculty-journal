const Publish = ({ onClose }) => {
    return ( <>
    <section className="mt-[5vh] w-[80vw] h-[40vh] ml-[10vw] absolute bg-[#D9D9D9] lg:w-[90vw] lg:ml-[5vw] lg:h-[80vh]">
        <div className="w-[60vw] ml-[10vw] flex-col mt-[10vw] lg:ml-[15vw] lg:mt-[7vh]">
            <h2 className="w-[40vw] ml-[10vw] mb-[20px] lg:ml-[25vw] lg:font-bold">UPLOAD YOUR FILE</h2>
            <button className="mb-[30px] round-[20px] bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-xl text-[white]">Upload document</button>
            <input placeholder="add abstract or description of journal" type="text" className="w-[60vw] pb-[10vh] lg:pb-[30vh]"/>
            <button className="mt-[20px] w-[100%] bg-[#2516D4] py-[5px] rounded-[10px] text-[10px] text-[white] lg:py-[20px] lg:text-[15px]" onClick={onClose}>PUBLISH</button>
        </div>
    </section>
    </> );
}
 
export default Publish;