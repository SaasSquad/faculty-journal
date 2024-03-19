const Publication = (props) => {
    return ( <>
    <div className='border-gray-500 mx-[5vw] p-4 md:p-8 border-4 mb-4'>
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{props.title}</h3>
      <p className="mb-3">{props.desc}</p>
      <div className=' mb-4 flex place-content-end'>
      <p>Author: {props.author}</p></div>
      <div className="flex justify-between"><p>Date Published: {props.date}</p><button className="px-6 py-2 bg-blue-900">Read</button></div>
    </div></> );
}
 
export default Publication;