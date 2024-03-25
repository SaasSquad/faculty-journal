import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Publish = ({ handlePublishPopUp, handleSubmit, title, setTitle, description, setDescription, setFile }) => {



    return (<>
        <section className="mt-[10vh] w-[80vw] rounded-md h-[60vh] md:h-[75vh] ml-[10vw] absolute bg-[#D9D9D9] z-10">
            <button className='absolute right-4 p-2' onClick={handlePublishPopUp}>
                <FontAwesomeIcon icon={faX} />
            </button>
            <form className="md:w-[60vw] ml-[10vw] flex-col mt-[10vw] md:mt-9" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file" className="md:w-[40vw] text-base block mb-[10px]">UPLOAD YOUR FILE</label>
                    <input type="file" accept="application/pdf" name="" id="file" onChange={(e) => setFile(e.target.files[0])} className="mb-[20px] bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-md text-[white]" />
                </div>
                <div>
                    <label htmlFor="title" className="md:w-[40vw] block mr-[20px] mb-[15px] lg:font-bold">TITLE</label>
                    <input type="text" id="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="mb-[30px] w-[60vw] outline-none round-[20px] py-[5px] px-[10px] text-[18px] rounded-xl" />
                </div>
                <div>
                    <textarea name="" id="" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add abstract or description of journal" className="w-[60vw] h-[20vh] outline-none px-4 py-2 rounded-md"></textarea>
                </div>
                <button className="mt-6 rounded-md w-[60vw] py-3 bg-[#2516D4] text-white">PUBLISH</button>
            </form>
        </section>
    </>);
}

export default Publish;