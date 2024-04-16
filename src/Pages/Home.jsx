import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import api, { API_URL } from '../api/Api'
import { Link } from "react-router-dom"
import journalImg from '../assets/Images/journalImg.png'

const Home = () => {

    const [articles, setArticles] = useState([])
    const [file, setFile] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('jwt_token')
        api.get('/student/articles', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        const token = localStorage.getItem('jwt_token')
        api.get('/student/articles', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const showPdf = (pdf) => {
        window.open(`${API_URL}/files/${pdf}`, "_blank", "noreferrer");
    }

    return (<>
    
        <div className="box-border">

            <section className=" pt-12 pb-10">
                <div className="flex justify-center pb-5">
                    <p className="font-bold text-3xl text-blue-950  text-center">
                        Lagos State University Engineering <br /> And <br />Technology Resarch Journal.
                    </p>
                </div>
                <div className="flex justify-center">
                <button className="bg-blue-950 rounded-lg px-6 text-white text-xl py-2 font-bold "><Link to="/publications">View Journals</Link></button>
                </div>
            </section>
            <section>
                <div className="justify-center box-border p-10 md:p-20 lg:py-0">
                    <h1 className='text-xl text-center'>AIMS AND SCOPE</h1>
                    <p className=" md:text-left mt-10 mb-10">
                        Engineering And Technology Journal is a referreed journal to be of interest and use to all those concerned with research in various
                        fields or closely related to Mechanical, Electrical, Electronics, Computer, Chemical, Polymer, Civil and Environment, Aerospace,
                        Information Technology, Biotechnology, Renewable Energy, Management Technology, Agricultural Engineering, Automotive, Materials
                        and Metallurgy, Technology Education, Industrial and Production Engineering disciplines. The journal aims to provide a highly
                        readable and valuable addition to the literaturewhich will serve as an indispensable reference tool for years to come. The coverage of the
                        journal will includes theoretical and experimental findings in the various fields. The journal also encourages the submission of critical review
                        articles covering advances in recent research of such fields as well as technical notes.
                    </p>
                    <h1 className='text-l font-bold'>Submission Address:</h1>
                    <p className=" md:text-left mb-10">
                    Authors who are not able to submit articles through the online submission link are requested to submit their paper electronically to: <a className='text-[blue] font-bold' href="etrjournal@gmail.com">etrjournal@gmail.com</a>
                    </p>
                    <h1 className='text-l font-bold'>Editors-in-chief</h1>
                    <p className=" md:text-left mb-10">
                    Prof. Nurudeen A. Raji
                    Mechanical Engineering Department
                    Lagos State University, Nigeria
                    P.M.B. 1012, Epe. Lagos
                    Nigeria
                    </p>
                    <h1   className='text-l font-bold'>Editorial Board Members</h1>
                    <p>
                    Prof. Waheed Adekojo Ojo     
                    Federal University of Agriculture Abeokuta.
                    <br />
                    <br />
                    Prof. O.O. Olugbara
                    Durban University of Technology, South Africa.
                    <br />
                    <br />
                    Prof. O.O. Oluwole
                    University of Ibadan, Ibadan.
                    <br />
                    <br />
                    Prof. Ganiu I. Lawal
                    University of Lagos, Akoka. Nigeria
                    <br />
                    <br />
                    Prof. P.A.O. Adegbuyi
                    Lagos State University, Nigeria
                    <br />
                    <br />
                    Dr. A.I.O. Yussuff
                    Lagos State University, Nigeria
                    <br />
                    <br />
                    Prof. Salami Momoh
                    Electrical, Electronic and Mechatronic Engineering
                    <br />
                    <br />
                    Elizade University, llara-Mokin
                    Nigeria
                    <br />
                    <br />

                    Dr. Olufemi A. Omitaomu
                    Artificial Intelligence in Energy Systems
                    Energy Infrastructure Sitting and Analysis
                    Oak Ridge National Laboratory and
                    University of Tennesse, USA
                    <br />
                    <br />

                    Prof. Ekundayo Shittu
                    Engineering and Technology Management
                    Enviromental and Energy Management
                    System Engineering, Operation, Research and Management Science
                    George Washington University, USA
                    <br />
                    <br />
                    </p>
                    <h1>Managing Editor</h1>
                    <p>Dr. K.F.K Oyedeko
                        <br />
                    Chemical Engineering Department
                    <br />
                    Lagos State University, Nigeria.</p>
                    <div className=' justify-center mt-12'>
                <img src={journalImg} alt="" />
                <p className='font-bold text-[#436378]'>
                    (print) ISSN 0794-2834
                    <br />
                    (Online) ISSN 2736-1969
                </p>
            </div>
                </div>
            </section>
        </div>
        <section>
                <div className="flex justify-center py-10">
                    <h1 className="text-blue-950 text-2xl font-bold">
                        Current Publications
                    </h1>
                </div>
                {typeof (articles) == 'object' ? articles.map(article => {
                    return (
                        <div key={article._id} className="mt-10 bg-[#d9d9d9] mx-8 md:mx-24 p-10">
                            <h2 className="text-2xl font-semibold text-black">{article.title}</h2>
                            <p className="bg-[#d9d9d9] mt-4">{article.description}</p>
                            <div className="bg-[#d9d9d9] pt-10 pb-4 flex flex-col md:flex-row justify-between items-center">
                                <div className="text-center mb-3 md:text-left md:mb-0">
                                    <p className="mb-2 text-sm text-black">{article.createdAt}</p>
                                    <p className="text-black text-sm">Author: {article.author.lastName} {article.author.firstName}</p>
                                    <p className="text-black text-sm">Academic status: {article.academicStatus}</p>
                                </div>
                                <button onClick={() => showPdf(article.file)} className=" bg-blue-600 text-white mr-4 rounded-md px-4 py-2 text-lg font-semibold text-black">READ</button>
                            </div>
                        </div>
                    )
                }) : <p className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">{articles}</p>}
                <div className='flex justify-center mt-8'>
                    <button className="bg-blue-950 text-white rounded-lg font-bold p-3 text-xl text-center"><a href="/publications">See more</a></button>
                </div>
            </section>

        <div>
            <section>
                <Footer />
            </section>
        </div>

    </>);
}

export default Home;

