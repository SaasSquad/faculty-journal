import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import api, { API_URL } from '../api/Api'

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

    const showPdf = (pdf) => {
        window.open(`${API_URL}/files/${pdf}`, "_blank", "noreferrer");
    }

    return (<>
        <div className="box-border">

            <section className="bg-[#d9d9d9] pt-12 pb-20">
                <div className="flex justify-center pb-14 pt-8">
                    <p className="font-bold text-3xl text-blue-950 w-80 text-center">
                        Lagos State University Engineering And Technology Resarch Journal.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="/publications"><button className="bg-blue-950 rounded-lg px-6 text-white text-xl py-2 font-bold ">View Journals</button></a>
                    {/* <button className="bg-blue-700 rounded-lg px-6 text-xl py-2 ml-12 font-bold">Next</button> */}
                </div>
            </section>
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

            <section>
                <div className="justify-center bg-[#d9d9d9] mt-12 box-border p-10 md:p-20 text-center">
                    <h1 className='text-xl'>AIMS AND OBJECTIVES</h1>

                    <p className=" text-center md:text-left mt-10 mb-10 justify-center">
                        Engineering And Technology Journal is a referreed journal to be of interest and use to all those concerned with research in various
                        fields or closely related to Mechanical, Electrical, Electronics, Computer, Chemical, Polymer, Civil and Environment, Aerospace,
                        Information Technology, Biotechnology, Renewable Energy, Management Technology, Agricultural Engineering, Automotive, Materials
                        and Metallurgy, Technology Education, Industrial and Production Engineering disciplines. The journal aims to provide a highly
                        readable and valuable addition to the literaturewhich will serve as an indispensable reference tool for years to come. The coverage of the
                        journal will includes theoretical and experimental findings in the various fields. The journal also encourages the submission of critical review
                        articles covering advances in recent research of such fields as well as technical notes.
                    </p>
                </div>
            </section>
        </div>

        <div>
            <section>
                <Footer />
            </section>
        </div>

    </>);
}

export default Home;

