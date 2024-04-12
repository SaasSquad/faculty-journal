import Footer from "../Components/Footer";

const Contact = () => {
    return (<>
        <div className="">
            <div className="mx-24 my-12">
                <h1 className="font-bold text-2xl mb-6 ">CONTACT</h1>

                <p>
                    Prof. Nurudeen A. Raji, Mechanical Engineering<br />
                    Department, Lagos State University, Nigeria.<br /><br />
                    P.M.B. 1012, Epe, Lagos, Nigeria<br /><br />
                    <span className="font-bold">Phone:</span> <br />
                    +234-803-325-1143 <br />
                    +234-813-353-32
                </p>
                <div className="mt-4">
                    <p><span className="font-bold">Enquiries:</span> <a className="ml-2" href="#">info.etrj@gmail.com</a></p>
                    <p><span className="font-bold">Submissions:</span> <a className="ml-2" href="#">etrjournal@gmail.com</a></p>
                    <p><span className="font-bold">Editorial:</span> <a className="ml-2" href="#">editor.etrj@gmail.com</a></p>
                    <p><span className="font-bold">Subscription: </span> <a className="ml-2" href="#">subscriptionetrj@gmail.com</a></p>

                </div>

                <div className='mt-12 bg-[#d9d9d9] p-6'>
                    <h2 className='text-2xl font-bold mb-6'>FEEDBACK</h2>
                    <form action="" className='flex flex-col space-y-2'>
                        <div className='flex space-x-2 mb-2'>
                            <input placeholder='Name' className='p-2 outline-none' type="text" />
                            <input placeholder='Email' className='p-2 outline-none' type="email" />
                        </div>

                        <input placeholder='Subject' className='p-2 mb-2 outline-none' type="text" />
                        <textarea placeholder='Message' className='p-2 mb-6 outline-none' />
                        <button
                            type='submit'
                            className="bg-blue-950 rounded-lg px-6 text-white text-xl py-2 font-bold "
                        >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;