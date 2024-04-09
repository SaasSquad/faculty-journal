import { useState, useEffect, useContext } from 'react';
import api from '../api/Api';
import Publish from '../Components/Publish';
import DashboardHeader from '../Components/DashboardHeader';
import ArticleGrid from '../Components/ArticleGrid';
import { userContext } from '../App';
import PaperTracking from '../Components/PaperTracking';

function AdminDashboard() {
  const [publishPopUp, setPublishPopUp] = useState(false);
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState()
  const user = useContext(userContext)

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

  const handlePublishPopUp = () => {
    setPublishPopUp(!publishPopUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handlePublishPopUp()
    const token = localStorage.getItem('jwt_token')
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file', file)
    api.post(`/student/create-article/${token}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        window.location.href = '/dashboard'
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {publishPopUp && <Publish
        handleSubmit={handleSubmit}
        handlePublishPopUp={handlePublishPopUp}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        setFile={setFile}
      />}
      {/* <DashboardHeader user={user} /> */}
      <div className="bg-[#ffffff] md:mx-24 p-4 md:px-10 md:py-16 lg:mx-5 lg:py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-xl md:text-2xl lg:text-xl">SUBMISSIONS</p>
          <button onClick={handlePublishPopUp} className="rounded-lg px-2 md:px-2 py-2 text-white bg-[#2516d4] mt-4 md:mt-0">New Submit</button>
        </div>
        <PaperTracking />

        {/* <div className="bg-[#bdadad] mt-12 p-4 md:p-10">
          {
            typeof (articles) == 'object' ?
              articles.map((article) => (
                <ArticleGrid key={article._id} article={article} />)) :
              <p className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">{articles}</p>
          }
        </div> */}
      </div>


      {
        publishPopUp &&
        <div className='absolute top-0 w-[100vw] h-[100vh] bg-black opacity-80' />
      }
    </div>
  );
}

export default AdminDashboard;

