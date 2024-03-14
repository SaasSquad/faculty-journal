import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import axios from 'axios'
const Home = () => {
    
    const [article, setArticles] = useState([])

    axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:3001/student/articles')
      .then(res => {
        setArticles(res.data)
        console.log(res.data[0].title)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

    return ( <>
        <div className="box-border">

            <section className="bg-[#d9d9d9] pt-12 pb-20">
                <div className="flex justify-center pb-14 pt-8">
                    <p className="font-bold text-3xl text-blue-950 w-80 text-center">
                        Lagos State University Engineering And Technology Resarch Journal.
                    </p>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-700 rounded-lg px-6 text-xl py-2 mr-12 font-bold">Current</button>
                    <button className="bg-blue-700 rounded-lg px-6 text-xl py-2 ml-12 font-bold">Next</button>
                </div>
            </section>
            <section>
                <div className="flex justify-center py-10">
                    <h1 className="text-blue-950 text-2xl font-bold">
                        Current Publications
                    </h1>
                </div>
                <div className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">
                    {article}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">
                    Itaque dolorum necessitatibus sint at dolorem sequi, voluptatum sit iusto voluptatibus earum soluta saepe explicabo, nihil quibusdam! Tempore iusto rem facilis quas?
                </div>
                <div className="mt-10 bg-[#d9d9d9] text-xl mx-8 md:mx-24 p-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias dolores quibusdam rerum placeat maiores!
                </div>
                <div className='flex justify-center mt-8'>
                <button className="bg-blue-950 text-white rounded-lg font-bold p-3 text-xl text-center">See more</button>
                </div>
            </section>

            <section>
                <div className="justify-center bg-[#d9d9d9] mt-12 box-border p-10 md:p-20 text-center">
                    <h1 className='text-xl'>AIMS AND OBJECTIVES</h1>

                    <p className=" text-center md:text-left mt-10 mb-10 justify-center">
                        Engineering And Technology Journal is a referreed journal to be of interest and use to all those concerned with research in various
                        fields or closely related to Mechanical, Electrical, Electronics, Computer, Chemical, Polymer, Civil and Environment, Aerospace,
                        Information Technology, Biotechnology, Renewable Energy, Management Technology, Agricultural Engineering, Automotive, Materials 
                        and Metallurgy, Technology Education, Industrial and Production Engineering disciplines. The journal aims to provide a highly 
                        readable and valuable addition to the literaturewhich will serve as an indispensable reference tool for years to come. The coverage of the 
                        journal will includes theoretical and experimental findings in the various fields. The journal also encourages the submission of critical review 
                        articles covering advances in recent research of such fields as well as technical notes.
                    </p>
                </div>
            </section>
        </div>

        <div>
            <section>
                <Footer/>
            </section>
        </div>

    </> );
}
 
export default Home;

