const Home = () => {
    return ( <>
        <div className="text-3xl box-border">

            <section className="bg-[#d9d9d9] box-border  ">
                <div className="flex justify-center  px-40">
                    <p className="font-bold text-blue-950">
                        Lagos State university Engineering And Technology Resarch Journal
                    </p>
                </div>
                <div className=" flex justify-around mt-10">
                    <button className="bg-blue-700 mb-10 rounded-3xl p-3 text-2xl">current</button>


                    <button className="bg-blue-700 ml-10 mb-10 rounded-3xl p-3 text-2xl">current</button>
                </div>
            </section>
            <section>
                <div className="flex justify-center py-10">
                    <h1 className="text-blue-950 font-bold">
                        Current Publications
                    </h1>
                </div>
                <div className="mt-10 bg-[#d9d9d9] p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-10 bg-[#d9d9d9]  p-5">
                    Itaque dolorum necessitatibus sint at dolorem sequi, voluptatum sit iusto voluptatibus earum soluta saepe explicabo, nihil quibusdam! Tempore iusto rem facilis quas?
                </div>
                <div className="mt-10 bg-[#d9d9d9]  p-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias dolores quibusdam rerum placeat maiores!
                </div>
                <div><button className="bg-[#d9d9d9] p-3 mt-10 text-2xl">See more</button>

                </div>
            </section>

            <section>
                <div className="justify-center bg-[#d9d9d9] mt-12 box-border p-20 ">
                    <h1>AIMS AND OBJECTIVES</h1>

                    <p className="text-left mt-10 mb-10 justify-center  ">
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

    </> );
}
 
export default Home;

