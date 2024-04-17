import { useEffect, useState } from "react";
import api from "../api/Api";

const ArchivePage = () => {


    const [articles, setArticles] = useState([])

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

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const groupArticlesByYear = (articles) => {
    const groupedArticles = {};
    articles.forEach(article => {
      const year = new Date(article.createdAt).getFullYear();
      if (!groupedArticles[year]) {
        groupedArticles[year] = [];
      }
      groupedArticles[year].push(article);
    });
    return groupedArticles;
  };

  const groupedArticles = groupArticlesByYear(articles);

  return (
    <div className="py-5 px-28 bg-[#FAFAFA]">
      <h1 className="text-3xl text-blue-950 font-bold mb-4">Journal Archive</h1>
      {Object.keys(groupedArticles).map(year => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedArticles[year].map(article=> (
              <div key={article.id} className="bg-[#d9d9d9] p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">{formatDate(article.createdAt)}</p>
                <a href={`/article/${article.id}`} className="text-blue-500 hover:underline block mt-2">Read more</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchivePage;
