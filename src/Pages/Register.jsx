// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import logo from '../assets/Images/logo.png'
import api from '../api/Api'; // Import the postData function
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [academicStatus, setAcademicStatus] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://faculty-journal-backend.onrender.com/signup', { firstName, lastName, email, password })
      .then(() => {
        navigate('/login')
        console.log("success")
  })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex items-center justify-center h-screen pt-60'>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-8 text-white">
          <div className="mb-4 text-center logo">
            <img
              src={logo}
              alt="LASU Logo"
              className="h-auto mx-auto mb-4 w-8 transform rotate-90 box-border m-auto"
            />
          </div>


          <div className="bg-opacity-25 rounded-md p-4 relative">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium">
                FIRST NAME:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium">
                LAST NAME:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium">
                ACADEMICSTATUS:
              </label>
              <select value={academicStatus} name="option" onChange={e => setAcademicStatus(e.target.value)} className="block w-full p-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-blue-500">
                <option value="" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Select an option</option>
                <option value="option1" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Lecturer</option>
                <option value="option2" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Student</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                PASSWORD:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                CONFIRM PASSWORD:
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans"
              />
            </div>

            <div className='block  p-0.5 text-left mb-1 '>
              <p>Registration confirmation will be emailed to you.</p>

            </div>

            <button
              className="bg-yellow-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
            >
              Register
            </button>

            <div className="mt-4">
              <p>Already have an account?<Link to="/login" className="text-white hover:bg-green-600">Login</Link>
              </p>
            </div>

          </div>
        </form>
    </div>
  );
};


export default Register;



// const validationSchema = Yup.object({
//   // Adjusted validation schema based on the new input field names
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   academicStatus: Yup.string().required('This field is required'),
//   email: Yup.string().required('email is required'),
//   password: Yup.string().required('Password is required'),
//   confirmPassword: Yup.string().required('Password confirmation is required'),
// });

// const Register = () => {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [academicStatus, setAcademicStatus] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const navigate = useNavigate()

//   const initialValues = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     academicStatus: academicStatus,
//     password: password, // Updated field name
//     confirmPassword: confirmPassword,
//     // rememberMe: false,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     api.post('/signup', { firstName, lastName, email, password })
//       .then(() =>
//         navigate('/login')
//       )
//       .catch(err => console.log(err))
//   }

//   return (
//     <div className='flex items-center justify-center h-screen pt-60'>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//         className=''
//       >
//         <Form className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-8 text-white">
//           <div className="mb-4 text-center logo">
//             <img
//               src={logo}
//               alt="LASU Logo"
//               className="h-auto mx-auto mb-4 w-8 transform rotate-90 box-border m-auto"
//             />
//           </div>

//           {/* <div className='block p-0.5 text-3xl text-left ml-4 mr-4 border-l-4 border-green-500 bg-white text-black'>
//            <p>Register for this site</p>
//         </div> */}


//           <div className="bg-opacity-25 rounded-md p-4 relative">

//             {/* FIRST NAME INPUT */}

//             <div className="mb-4">
//               <label htmlFor="firstName" className="block text-sm font-medium">
//                 FIRST NAME: {/* Updated label */}
//               </label>
//               <Field
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={firstName}
//                 onChange={e => setFirstName(e.target.value)}
//                 className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
//               />

//               <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
//             </div>

//             {/* LAST NAME INPUT */}

//             <div className="mb-4">
//               <label htmlFor="lastName" className="block text-sm font-medium">
//                 LAST NAME: {/* Updated label */}
//               </label>
//               <Field
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={lastName}
//                 onChange={e => setLastName(e.target.value)}
//                 className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
//               />

//               <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
//             </div>

//             {/* ROLE INPUT */}

//             <div className="mb-4">
//               <label htmlFor="role" className="block text-sm font-medium">
//                 ACADEMICSTATUS: {/* Updated label */}
//               </label>
//               {/* <Field as="select" name="option" onChange={e => setAcademicStatus(e.target.value)} className="block w-full p-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-blue-500">
//                 <option value="" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Select an option</option>
//                 <option value="option1" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Lecturer</option>
//                 <option value="option2" className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif">Student</option>
//               </Field> */}

//               <ErrorMessage name="role" component="div" className="text-red-500 text-xs" />
//             </div>


//             {/* EMAIL INPUT */}

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium">
//                 EMAIL: {/* Updated label */}
//               </label>
//               <Field
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
//               />

//               <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
//             </div>

//             {/* PASSWORD INPUT */}

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium">
//                 PASSWORD: {/* Updated label */}
//               </label>
//               <Field
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans" // Change border-4 to border
//               />

//               <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
//             </div>

//             {/* PASSWORD CONFIRMATION INPUT */}

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium">
//                 CONFIRM PASSWORD: {/* Updated label */}
//               </label>
//               <Field
//                 type="password"
//                 id="confirmpassword"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={e => setConfirmPassword(e.target.value)}
//                 className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans" // Change border-4 to border
//               />

//               <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
//             </div>

//             <div className='block  p-0.5 text-left mb-1 '>
//               <p>Registration confirmation will be emailed to you.</p>

//             </div>

//             <button
//               type="submit"
//               className="bg-yellow-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
//             >
//               Register
//             </button>

//             <div className="mt-4">
//               <p>Already have an account?<Link to="/login" className="text-white hover:bg-green-600">Login</Link>
//               </p>
//             </div>

//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };