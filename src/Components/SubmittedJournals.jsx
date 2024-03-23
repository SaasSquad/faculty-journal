import { useEffect, useState } from "react";
import api from "../api/Api";
import axios from "axios";

const SubmittedJournals = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api.get('/admin/pending-articles')
      .then(res => {
        setArticles(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleApprove = (_id) => {
    axios.defaults.withCredentials = true

    api.put('/admin/approve-article/'+_id)
      .then(res => {
        setArticles(res.data)
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
          articles.map(article => {
            return (
              <div key={article._id}>
                <div className="bg-[#BDADAD] px-[10px] py-[10px]">
                  <ul>
                    <li className="bg-[#D9D9D9] flex flex-row px-[10px] py-[10px]">
                      <div className="ml-[5px]">
                        <h2 className="font-bold">Title: {article.title}</h2>
                        <p className="bg-[#d9d9d9] mt-4">Description: {article.description}</p>
                        <p className="text-[10px] mt-[10px]">Author: {article.author.firstName} {article.author.lastName}</p>
                        <p className="text-[10px] mt-[10px]">Date: {article.createdAt}</p>
                        <button className="bg-[#2516D4] px-[15px] py-[5px] text-[10px] mt-[10px] font-bold text-white">READ</button>
                      </div>
                      <div className="ml-auto flex flex-col">
                        <button onClick={() => handleApprove(article._id)} className="bg-[#00BF35] px-[20px] py-[10px] text-white text-[10px]">APPROVE</button>
                        <button className="bg-[#BF0000] px-[20px] py-[10px] text-white text-[10px] mt-[10px]">DECLINE</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })
          : <></>
      }
    </>);
}

export default SubmittedJournals;