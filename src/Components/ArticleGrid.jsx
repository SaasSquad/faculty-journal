import { useContext, useState } from "react";
import { userContext } from "../App";
import api from "../api/Api";

const ArticleGrid = ({ article }) => {
    const user = useContext(userContext)
    const [file, setFile] = useState(null)

    const handleOpenFile = (_id) => {
        api.get(`/admin/file/${_id}`)
                .then(res => {
                    // let reader = new FileReader()
                    // reader.readAsDataURL(res.data)
                    // reader.onload = (e) => {
                    //     setFile(e.target.result)
                    // }
                    // const file = res.data
                    setFile(res.data)
                    // console.log(res.data)
            })
            .catch(err => (
                console.log(err)
            ))
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

    return (
        <div className="bg-[#d9d9d9] relative mt-2 p-4 md:py-10 md:px-16 mb-8 md:mb-20">
            {
                user.role != 'admin' && (article.isApproved ?
                    <p className="absolute text-green-700 top-6 right-10">Approved</p>
                    : <p className="absolute text-yellow-600 top-6 right-10">Pending</p>
                )}
            <h2 className="text-lg md:text-xl font-semibold text-black">{article.title}</h2>
            <p className="bg-[#d9d9d9] mt-4">{article.description}</p>
            <div className="bg-[#d9d9d9] pt-10 pb-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center mb-3 md:text-left md:mb-0">
                    <p className="mb-2 text-sm text-black">{article.createdAt}</p>
                    <p className="text-black text-sm">Author: {article.author.lastName} {article.author.firstName}</p>
                    <p className="text-black text-sm">Academic status: {user.academicStatus}</p>
                </div>
                <div className="">
                    <button onClick={() => handleOpenFile(article._id)} className=" bg-blue-600 text-white mr-4 rounded-md px-2 py-1 font-semibold text-black">READ</button>
                    <button onClick={() => handleDelete(article._id)} className="bg-red-700 text-white rounded-md px-2 py-1 font-semibold text-black">DELETE</button>
                </div>
            </div>
            <div>
                {/* {
                    file &&
                    // <PDFViewer file={file}/>
                    // <embed src={file} className="w-[100%] h-[100%]"/>
                    // <iframe src={file} type="application/pdf" />
                } */}
            </div>
        </div>
    );
};

export default ArticleGrid