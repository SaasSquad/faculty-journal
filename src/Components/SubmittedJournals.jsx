import { useContext, useEffect, useState } from "react";
import axios from "axios";
import api, { API_URL } from "../api/Api";
import { userContext } from "../App";

const SubmittedJournals = () => {
  const [articles, setArticles] = useState([]);
  const [editFile, setEditFile] = useState();
  const [editFilePopUp, setEditFilePopUp] = useState(false);
  const user = useContext(userContext)


  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    api.get(`/admin/pending-articles/${token}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => {
        setArticles(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleUploadEdit = (e, _id) => {
    e.preventDefault();
    console.log(_id);
    const formData = new FormData();
    formData.append("file", editFile);
    api.put(`/admin/edit-article/${_id}`,  formData, { headers: { "content-type" : "multipart/form-data" } })
    setEditFilePopUp(false);
    // window.location.href = "/submissions"
  }


  const showPdf = (pdf) => {
    window.open(`${API_URL}/files/${pdf}`, "_blank", "noreferrer");
}

  const handleApprove = (_id) => {
    const token = localStorage.getItem('jwt_token')
    api.put(`/admin/approve-article/${_id}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => {
        location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  

  const handleReject = (_id) => {
    const token = localStorage.getItem('jwt_token')
    api.put(`/admin/reject/${_id}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(res => {
        location.reload()
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
   
      {
        
        typeof (articles) == 'object' ?
          articles.map(article =>
          (
            <div key={article._id}>
              {
                  editFilePopUp && 
                  <div className="mt-[5vh] w-[60vw] rounded-md h-[30vh] md:h-[75vh] ml-[10vw] absolute bg-[#D9D9D9] z-10 p-[20px] lg:h-[40vh] lg:mt-[20px]">
                    <h1>UPLOAD JOURNAL FILE</h1>
                    <form onSubmit={(e) => handleUploadEdit(e, article._id)}>
                      <input type="file" accept="multipart/form-data" className="mb-[20px] bg-[#2516D4] py-[10px] px-[10px] text-[12px] rounded-md text-[white] w-[50vw]" onChange={e => setEditFile(e.target.files[0])}/>
                      <button type="submit" className="mt-6 rounded-md w-[20vw] py-3 bg-[#2516D4] text-white">PUBLISH</button>
                    </form>
                  </div>
                }
              <div className="bg-[#BDADAD] p-4 md:py-10 md:px-16">
              
                <ul>
                  <li className="bg-[#D9D9D9] md:flex px-[10px] py-[10px]">
                    <div className="ml-[5px] flex flex-col items-center md:items-start">
                      <h2 className="font-bold">Title: {article.title}</h2>
                      <p className="bg-[#d9d9d9] my-6">Description: {article.description}</p>
                      <div className="text-center mb-3 md:text-left">
                        <p className="mb-2 text-sm text-black">{article.createdAt}</p>
                        <p className="text-black text-sm">Author: {article.author.lastName} {article.author.firstName}</p>
                        <p className="text-black text-sm">Academic status: {user.academicStatus}</p>
                      </div>
                      <button className="bg-blue-600 justify-self-center text-sm text-white mr-4 rounded-md px-2 py-1 font-semibold" onClick={() => showPdf(article.file)}>READ</button>
                    </div>
                    <div className="ml-auto mt-2 flex flex-col">
                    <button onClick={() => handleReject(article._id)} className="bg-[#4061cf] rounded-md px-[20px] py-[10px] text-white text-[10px] my-[10px]"><a href={`${API_URL}/files/${article.file}`} download>DOWNLOAD</a></button>
                      <button onClick={() => handleApprove(article._id)} className="bg-[#00BF35] rounded-md px-[20px] py-[10px] text-white text-[10px]">APPROVE</button>
                      <button onClick={() => handleReject(article._id)} className="bg-[#BF0000] rounded-md px-[20px] py-[10px] text-white text-[10px] mt-[10px]">DECLINE</button>
                      <button className="bg-[#00BF35] rounded-md px-[20px] py-[10px] text-white text-[10px] mt-[10px]" onClick={() => setEditFilePopUp(true)}>UPLOAD EDITED <br /> AND APPROVE</button>
                    </div>
                  </li>
                </ul>

              </div>
            </div>

          )
          )
          : <p className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">{articles}</p>
      }
    </>);
}

export default SubmittedJournals;
