
const ArticleGrid = ({ article }) => {
    return (


        <div className="bg-[#d9d9d9] mt-2 p-4 md:py-10 md:px-16 mb-8 md:mb-20">
            <h2 className="text-lg md:text-xl font-semibold text-black">{article.title}</h2>
            <p className="bg-[#d9d9d9] mt-4">{article.description}</p>
            <div className="bg-[#d9d9d9] pt-10 pb-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg md:text-xl mb-6 font-semibold text-black">{article.date}</p>
                <p className=" bg-yellow-700 rounded-md px-4 py-2 text-lg md:text-xl font-semibold text-black">{article.status}</p>
            </div>
        </div>
    );
};

export default ArticleGrid