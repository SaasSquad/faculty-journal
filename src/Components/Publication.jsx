const Publication = (props) => {
    return ( <>
    <div className='border-gray-500 mx-[5vw] p-4 md:p-8 border-4 mb-4'>
      <h3 className="text-2xl mb-2">{props.title}</h3>
      <p className="mb-3">{props.desc}</p>
      <div className='flex justify-between mb-4'><p>Date Published: {props.date}</p>
      <p>Author: {props.author}</p></div>
      <button className="px-6 py-2 bg-blue-900">Read</button>
    </div></> );
}
 
export default Publication;