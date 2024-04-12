import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import api, { API_URL } from '../api/Api'
import { Link } from 'react-router-dom'

function CurrentJournal() {
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
        <div className="mb-12">
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
        </div>

    </>);
}

export default CurrentJournal