import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  // Adjusted validation schema based on the new input field names
  firstName: Yup.string().required('First Name is required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Last Name is required'),
  role: Yup.string().required('This field is required'),
  email: Yup.string().required('email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Password confirmation is required'),
  });

const Register = () => {
  const initialValues = {
    firstName: '',
    middleName: '',
    lasttName: '',
    email: '',
    role: '',
    password: '', // Updated field name
    confirmPassword: '', 
    rememberMe: false,
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className='flex items-center justify-center h-screen'>
       <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="mx-auto max-w-md bg-blue-900 bg-opacity-95 p-8 text-white">
        <div className="mb-4 text-center">
          <img
            src="https://doyenetech.com/wp-content/uploads/2023/11/Doyenetech_logo-300x142-1-1.png"
            alt="Doyenetech Logo"
            className="w-40 h-auto mx-auto mb-4"
          />
        </div>

        <div className='block p-0.5 text-3xl text-left ml-4 mr-4 border-l-4 border-green-500 bg-white text-black'>
           <p>Register for this site</p>
        </div>


        <div className="bg-opacity-25 rounded-md p-4 relative">

                {/* FIRST NAME INPUT */}

        <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">
              FIRST NAME: {/* Updated label */}
            </label>
            <Field
               type="text"
               id="firstName"
               name="firstName"
               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
            />

            <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
          </div>

                   {/* MIDDLE NAME INPUT */}

        <div className="mb-4">
            <label htmlFor="middleName" className="block text-sm font-medium">
              MIDDLE NAME: {/* Updated label */}
            </label>
            <Field
               type="text"
               id="middleName"
               name="middleName"
               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
            />

            <ErrorMessage name="middleName" component="div" className="text-red-500 text-xs" />
          </div>

            {/* LAST NAME INPUT */}

        <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">
              LAST NAME: {/* Updated label */}
            </label>
            <Field
               type="text"
               id="lastName"
               name="lastName"
               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
            />

            <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
          </div>

            {/* ROLE INPUT */}

        <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium">
              ROLE: {/* Updated label */}
            </label>
            <Field
               type="text"
               id="role"
               name="role"
               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
            />

            <ErrorMessage name="role" component="div" className="text-red-500 text-xs" />
          </div>


            {/* EMAIL INPUT */}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              EMAIL: {/* Updated label */}
            </label>
            <Field
               type="email"
               id="email"
               name="email"
               className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-serif" // Change border-4 to border
            />

            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
          </div>

            {/* PASSWORD INPUT */}

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              PASSWORD: {/* Updated label */}
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans" // Change border-4 to border
            />

            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
          </div>

           {/* PASSWORD CONFIRMATION INPUT */}

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              CONFIRM PASSWORD: {/* Updated label */}
            </label>
            <Field
              type="password"
              id="password"
              name="confirmPassword"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 text-black opacity-90 font-bold font-sans" // Change border-4 to border
            />

            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
          </div>

          <div className='block  p-0.5 text-left mb-1 '>
            <p>Registration confirmation will be emailed to you.</p>

          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 ml-0"
          >
            Register
          </button>

          <div className="mt-4">
            <p>Already have an account?<a href="./Login" className="text-white hover:bg-green-600">Login</a>
            </p>
          </div>

        </div>
      </Form>
    </Formik>
    </div>  
  );
};

export default Register;

