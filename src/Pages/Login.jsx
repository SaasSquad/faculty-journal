// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/Images/logo.png'

// const validationSchema = Yup.object({
//   // Adjusted validation schema based on the new input field names
//   email: Yup.string().required('email is required'),
//   password: Yup.string().required('Password is required'),
//   });

// const Login = () => {
//   const initialValues = {
 
//     email: '',
//     password: '', // Updated field name
//     // rememberMe: false,
//   };

//   const onSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <div className='flex items-center justify-center h-screen '>
//         <Formik
//            initialValues={initialValues}
//            validationSchema={validationSchema}
//            onSubmit={onSubmit}
//         >
            
//             <Form className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-4 text-white">
//                 <div className="mb-10 text-center logo">
//                      <img
//                        src={logo}
//                        alt="LASU Logo"
//                        className="h-auto  w-8 transform rotate-90 box-border m-auto"
//                     />
//                 </div>

//                {/* EMAIL INPUT */}

//                <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-medium">
//                       EMAIL: {/* Updated label */}
//                     </label>

//                    <Field
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
//                     />

//                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
//                 </div>

//              {/* PASSWORD INPUT */}

//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-sm font-medium">
//                        PASSWORD: {/* Updated label */}
//                     </label>
//                    <Field
//                       type="password"
//                       id="password"
//                       name="password"
//                       className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans" // Change border-4 to border
//                    />

//                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
//                 </div>

//                 <button
//                     type="submit"
//                  className="bg-yellow-500 text-white py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
//                 >
//                    Login
//                 </button>

//                 <div className="mt-4">
//                   <p>Don't have an account yet?  <a href="./Login" className="text-white hover:bg-green-600">Register</a>
//                   </p>
//                 </div>

            
//             </Form>
//         </Formik>
//     </div>  
//   );
// };

// export default Login;



// components/Login.js

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postData } from '../Services/Api'; // Import the postData function

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await postData('/login', values); // Adjust the URL path according to your backend API
      console.log('Login successful');
      resetForm();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-4 text-white">
          {/* Form fields */}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              EMAIL:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              PASSWORD:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
          >
            Login
          </button>

          <div className="mt-4">
            <p>
              Don't have an account yet?{' '}
              <a href="./Login" className="text-white hover:bg-green-600">
                Register
              </a>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
