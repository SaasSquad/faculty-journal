const Footer = () => {
    return ( 
     <div>

   

        <section className="bg-[#2313dc] flex flex-row text-white p-10 ">
            <div className="ml-20 ">
                <h1 className="font-bold text-2xl">QUICK LINKS</h1>
                <ul className="text-xl">
                    <li><a className="hover:text-green-600 underline"  href="#">HOME</a></li>
                    <li><a className="hover:text-green-600 underline" href="#">ARCHIVE</a></li>
                    <li><a className="hover:text-green-600 underline " href="#">CURRENT JOURNALS</a></li>
                    <li><a className="hover:text-green-600 underline" href="#">PROJECT/DESSERTATION/THESIS</a></li>
                    <li><a className="hover:text-green-600 underline" href="#">GUIDE FOR AUTHORS</a></li>
                    <li><a className="hover:text-green-600 underline" href="#">EDITORIAL POLICY</a></li>
                    <li><a className="hover:text-green-600 underline" href="#">SUBMISSION</a></li>
                </ul>
            </div>
            <div className="ml-80 text-xl ">
                <h1 className="font-bold text-2xl">CONTACT</h1>
            
               <p>
                    Prof. Nurudeen A. Raji, Mechanical Engineering 
                    <p>
                    Department, Lagos State University, Nigeria.
                    </p>
                </p>
                <p>
                    P.M.B. 1012, Epe, Lagos, Nigeria.
                </p>
                <p>
                    Phone:
                    +234-803-325-1143
                    +234-813-353-32
                </p>
                <div>
                    <p>Enquiries: <a a className="hover:text-green-600 underline" href="#">info.etrj@gmail.com</a></p>
                    <p>Submission: <a className="hover:text-green-600 underline" href="#">etrjournal@gmail.com</a></p>
                    <p>Editor: <a className="hover:text-green-600 underline" href="#">editor.etrj@gmail.com</a></p>
                    <p>Subscription <a className="hover:text-green-600 underline" href="#">subscriptionetrj@gmail.com</a></p>

                </div>

            </div>
        </section>
        <section className="bg-[#190f94] text-center text-white p-10 ">
            <p>&copy;2024 Copyright </p>
        </section>
     </div>
        
    );
}
 
export default Footer;