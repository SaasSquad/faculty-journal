
import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import api, { API_URL } from '../api/Api'
import { Link } from 'react-router-dom'

const Publications = () => {

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


    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticle = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // You can add additional logic here, like filtering data based on the search term
      };

  return (
    <>
     <section className="search_section mb-[10px] lg:mt-[20vh]">
     <h1 className="text-2xl md:text-6xl text-center my-[20px] font-bold text-[#0000ff] lg:text-3xl lg:mt-[50px]">
        Find Publications
      </h1>
      <div className="text-center m-auto flex justify-center ">
      <input className="sm:text-2xl md:text-4xl border-2 border-[#0000ff] py-2 pl-4 rounded-tl-full rounded-bl-full lg:h-[50px] lg:text-[10px] lg:w-[50vw] lg:text-2xl"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for articles or journals"
      />
      <button className="bg-[#0000ff] py-2 px-[8px] font-bold text-white rounded-tr-full rounded-br-full lg:h-[50px]">Search</button>
    </div>
     </section>
    <section className='m-5'>
    {typeof (filteredArticle) == 'object' ? filteredArticle.map(article => {
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
    </section>
    </>
  );
};

export default Publications;
