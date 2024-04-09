import { Link } from 'react-router-dom'

function AdminSubheader({handlePublishPopUp}) {
    return (
        <>
            <div className='flex mb-[20px]'>
                <Link to="/submissions" className="rounded-lg px-4 md:px-8 py-2 text-white bg-[#2516d4] mt-4 md:mt-0">View submissions</Link>
                 <Link to="/permission" className="rounded-lg px-4 md:px-8 py-2 text-white bg-[#2516d4] mt-4 md:mt-0 ml-[auto]">View Editorials</Link>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="font-bold text-xl md:text-xl lg:text-xl">YOUR PUBLICATIONS</p>
                <button onClick={handlePublishPopUp} className="rounded-lg px-4 md:px-8 py-2 text-white bg-[#2516d4] mt-4 md:mt-0">Publish</button>
            </div>
        </>
    )
}

export default AdminSubheader