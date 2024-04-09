import { useState, useEffect } from "react";
import api, { API_URL } from "../api/Api";
import { userContext } from "../App";


function PaperTracking() {
    const [articles, setArticles] = useState([]);

    const showPdf = (pdf) => {
        window.open(`${API_URL}/files/${pdf}`, "_blank", "noreferrer");
    }

    const handleDelete = (_id) => {
        const token = localStorage.getItem('jwt_token')
        api.delete(`/admin/delete-article/${_id}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => {
                location.reload()
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }




    useEffect(() => {
        const token = localStorage.getItem('jwt_token')
        api.get(`/student/articles/${token}`, { headers: { 'Authorization': `Bearer ${token}` } })
          .then(res => {
            setArticles(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])
  return (
    <>
    <section className="border-solid border-2 border-[#2516d4] rounded-[5px] mt-5">
        <h1 className="text-white bg-[#2516d4] pl-[10px]">Paper Tracking</h1>
        <div className="overflow-hidden lg:overflow-hidden">
            <div className="whitespace-nowrap overflow-x-scroll border-solid border-[2px] border-black-800 pb-[5px]lg:overflow-hidden"><strong className="mx-[10px]">S/N</strong><strong className="mr-[150px] lg:mr-[35vw]">Title</strong><strong className="mr-[50px] lg:mr-[20vw]">Status</strong><strong className="mr-[50px]">Action</strong> <strong className="mr-[50px]">Date</strong></div>
        </div>
        <br />
        <div>
            {
                typeof(articles) == "object" ? articles.map((article, index) => (
                    <div className="whitespace-nowrap overflow-x-scroll border-solid border-[2px] border-black-800 pb-[5px]lg:overflow-hidden " key={index}><strong className="mx-[10px]">{index}</strong><strong className="mr-[150px] lg:mr-[35vw]">{article.title}</strong><strong className="mr-[50px] lg:mr-[20vw]">{article.isApproved ? <p className="absolute text-green-700 top-6 right-10">Approved</p> : <p className="absolute text-yellow-600 top-6 right-10">Pending</p>}</strong><strong className="mr-[50px]">                <div className="">
                    <button onClick={() => showPdf(article.file)} className=" bg-blue-600 text-white mr-4 rounded-md px-2 py-1 font-semibold ">READ</button>
                    <button onClick={() => handleDelete(article._id)} className="bg-red-700 text-white rounded-md px-2 py-1 font-semibold ">DELETE</button>
                </div></strong> <strong className="mr-[50px]">{article.createdAt}</strong></div>
                )) : <p>No Submissions</p>
            }
        </div>
    </section>
    </>
  )
}

export default PaperTracking