const Footer = () => {
    return ( 
     <div>

   

        <section className="bg-[#2313dc] flex flex-col md:flex-row text-white p-10 mt-32">
            <div className="md:ml-20 mb-10">
                <h1 className="font-bold text-xl mb-6">QUICK LINKS</h1>
                <ul className="list-disc ml-6">
                    <li className="mb-2"><a className="hover:text-green-600 ml-2 "  href="#">HOME</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2" href="#">ARCHIVE</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2 " href="#">CURRENT JOURNALS</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2" href="#">PROJECT/DESSERTATION/THESIS</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2" href="#">GUIDE FOR AUTHORS</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2" href="#">EDITORIAL POLICY</a></li>
                    <li className="mb-2"><a className="hover:text-green-600 ml-2" href="#">SUBMISSION</a></li>
                </ul>
            </div>
            <div className="md:ml-80">
                <h1 className="font-bold text-xl mb-6">CONTACT</h1>
            
               <p>
                    Prof. Nurudeen A. Raji, Mechanical Engineering<br />
                    Department, Lagos State University, Nigeria.<br /><br />
                    P.M.B. 1012, Epe, Lagos, Nigeria<br /><br />
                    Phone: <br />
                    +234-803-325-1143 <br />
                    +234-813-353-32
                </p>
                <div className="mt-4">
                    <p>Enquiries: <a className="hover:text-green-600 ml-2" href="#">info.etrj@gmail.com</a></p>
                    <p>Submission: <a className="hover:text-green-600 ml-2" href="#">etrjournal@gmail.com</a></p>
                    <p>Editor: <a className="hover:text-green-600 ml-2" href="#">editor.etrj@gmail.com</a></p>
                    <p>Subscription <a className="hover:text-green-600 ml-2" href="#">subscriptionetrj@gmail.com</a></p>

                </div>

            </div>
        </section>
        <section className="bg-[#190f94] text-center text-white pt-8 pb-10">
            <p>&copy;2024 Copyright </p>
        </section>
     </div>
        
    );
}
 
export default Footer;