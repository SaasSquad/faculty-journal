// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { useState } from 'react';
import api from '../api/Api';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('/login', { email, password })
      .then(res => {
        localStorage.setItem('jwt_token', res.data.token)

        if (res.data.userDB.role === 'admin') {
          window.location.href = '/admindashboard'
        } else {
          window.location.href = '/dashboard'
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="flex bg-blue-200 items-center justify-center h-screen">
      <form className="mx-auto max-w-md bg-blue-900 rounded-lg bg-opacity-95 px-16 pt-2 pb-12 text-white" onSubmit={handleSubmit}>
        <img
          alt="Logo"
          className="w-[30px] transform rotate-90 box-border m-auto"
          src={logo}
        />
        <h2 className='text-center text-xl -mt-4 mb-6 font-bold'>Log in</h2>
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
            required
            className="mt-1 py-2 px-4 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
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
            required
            onChange={e => setPassword(e.target.value)}
            className="mt-1 py-2 px-4 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans"
          />

        </div>

        <button
          className="bg-yellow-500 text-white py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
        >Login</button>

        <div className="mt-4">
          <p>
            Don't have an account yet?{' '}
            <Link to="/register" className="text-white p-1 rounded-lg hover:bg-green-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;



// const validationSchema = Yup.object({
//   email: Yup.string().required('Email is required'),
//   password: Yup.string().required('Password is required'),
// });

// const Login = () => {
//   const initialValues = {
//     email: '',
//     password: '',
//   };

// const onSubmit = async (values, { resetForm }) => {
//   try {
//     await postData('/login', values); // Adjust the URL path according to your backend API
//     console.log('Login successful');
//     resetForm();
//   } catch (error) {
//     console.error('Login failed:', error);
//   }
// };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-4 text-white">
//           {/* Form fields */}

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">
//               EMAIL:
//             </label>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
//             />
//             <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">
//               PASSWORD:
//             </label>
//             <Field
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans"
//             />
//             <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
//           </div>

//           <button
//             type="submit"
//             className="bg-yellow-500 text-white py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
//           >
//             Login
//           </button>

//           <div className="mt-4">
//             <p>
//               Don't have an account yet?{' '}
//               <a href="./Login" className="text-white hover:bg-green-600">
//                 Register
//               </a>
//             </p>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };