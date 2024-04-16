import { useState, useEffect, useContext } from 'react';
import api from '../api/Api';
import Publish from '../Components/Publish';
import DashboardHeader from '../Components/DashboardHeader';
import ArticleGrid from '../Components/ArticleGrid';
import AdminSubheader from '../Components/AdminSubheader';
import { userContext } from '../App';
import axios from 'axios';
import PaperTracking from '../Components/PaperTracking';

function AdminDashboard() {
  const user = useContext(userContext)
  const [publishPopUp, setPublishPopUp] = useState(false);
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState()

  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    api.get(`/admin/articles/${token}`, {headers: {'Authorization': `Bearer ${token}`}})
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
    
  //   axios.post('/images', file)
  //   .then(res => {
  //     console.log('success')
  // })
  //   .catch(err => {
  //     console.log(err)
  //   })
    api.post(`/admin/create-article/${token}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(res => {
        window.location.href = '/admindashboard'
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
      <div className="bg-[#ffffff] md:mx-24 p-4 md:px-14 md:py-16 lg:mx-14 lg:py-5">
        <AdminSubheader handlePublishPopUp={handlePublishPopUp}/>
        <PaperTracking />
      </div>
      {
        publishPopUp &&
        <div className='absolute top-0 w-[100vw] h-[100vh] bg-black opacity-80' />
      }
    </div>
  );
}

export default AdminDashboard;

