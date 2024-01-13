// import React, { useState } from "react";
// import { FiUser } from "react-icons/fi";
// import { FiLock } from "react-icons/fi";
// import { AiOutlineMail } from "react-icons/ai";
// import axios from '../utils/axios'
// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       try {
//         const response = await axios.post('/signup',formData);

    
//         if (response.status === 201) {
//           console.log('User created successfully');
//         } else {
//           console.error('Failed to create user:', response.data.message);
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
    
//   };
//   return (
//     <>
//       <div className="flex h-screen">
//         <div className="w-2/4 bg-customBlue flex items-center justify-center" s>
//           <div className="text-center max-w-xl">
//             <h1 className="text-white font-extrabold text-6xl font-montserrat mb-6">
//               Welcome Back!
//             </h1>
//             <p className="text-white mt-4 text-2xl font-montserrat">
//               To keep connected with us, please <br /> login with your personal
//               info
//             </p>
//             <button type="submit" className="border-white border bg-customBlue  text-white font-bold py-5 px-20 mt-7 rounded-full focus:outline-white focus:border-white">
//               SIGN IN
//             </button>
//           </div>
//         </div>
//         <div className="w-3/4  flex items-center justify-center">
//           <div className="text-center">
//             <div className="max-w-md mx-auto">
//               <h1 className="text-customYellow font-extrabold text-6xl font-montserrat mb-12">
//                 Create Account
//               </h1>

//               <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
//                 <div class="relative">
//                   <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                     <FiUser className="text-gray-500" />
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     autoComplete="name"
//                     placeholder="Name"
//                     value={formData.name}
//             onChange={handleChange}
//                     className="bg-gray-100 text-gray-900 text-lg  block w-full px-10 py-5 mb-5"
//                   />
//                 </div>
//                 <div class="relative">
//                   <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                     <AiOutlineMail className="text-gray-500" />
//                   </div>
//                   <input
//                     type="text"
//                     name="email"

//                     id="email-address-icon"
//                     class="bg-gray-100  text-gray-900 text-lg  block w-full px-10 py-5 mb-5 "
//                     placeholder="Email"
//                     value={formData.email}
//             onChange={handleChange}
//                   />
//                 </div>
//                 <div class="relative">
//                   <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                     <FiLock className="text-gray-500" />
//                   </div>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//             onChange={handleChange}
//                     className="bg-gray-100 text-gray-900 text-lg  block w-full px-10 py-5"
//                   />
//                 </div>

//                 <button className="border-white border bg-customYellow  text-white font-bold py-6 px-20 mt-10 mx-10 rounded-full focus:outline-white focus:border-white">
//                   SIGN UP
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignupPage;


import React from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from '../utils/axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("/signup", values);
    
      if (response.status === 201) {
        console.log("User created successfully");
        toast.success('User created successfully');
      } else if (response.status === 400 && response.data.message === 'Email is already registered') {
        console.error("Email is already registered");
        toast.error("Email is already registered");
      } else {
        console.error("Failed to create user:", response.data.message);
        toast.error(`Failed to create user: ${response.data.message}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'Email is already registered') {
        console.error("Email is already registered");
        toast.error("Email is already registered");
      } else {
        console.error("Error:", error.message);
        toast.error("Failed to create user. Please try again.");
      }
    } finally {
      setSubmitting(false);
      resetForm();
    }
    
  
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="w-2/4 bg-customBlue flex items-center justify-center">
          {/* ... Your existing JSX code ... */}
          <div className="text-center max-w-xl">
            <h1 className="text-white font-extrabold text-6xl font-montserrat mb-6">Welcome Back!</h1>
            <p className="text-white mt-4 text-2xl font-montserrat">
              To keep connected with us, please <br /> login with your personal info
            </p>
            <Link to='/signin'>
            <button type="submit" className="border-white border bg-customBlue text-white font-bold py-5 px-20 mt-7 rounded-full focus:outline-white focus:border-white">
              SIGN IN
            </button></Link>
          </div>
        </div>
        <div className="w-3/4  flex items-center justify-center">
          <div className="text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-customYellow font-extrabold text-6xl font-montserrat mb-12">Create Account</h1>

              {/* Formik wrapper */}
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="max-w-sm mx-auto">
                  {/* Form fields */}
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FiUser className="text-gray-500" />
                    </div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Name"
                      className="bg-gray-100 text-gray-900 text-lg block w-full px-10 py-5 mb-5"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <AiOutlineMail className="text-gray-500" />
                    </div>
                    <Field
                      type="text"
                      name="email"
                      id="email-address-icon"
                      className="bg-gray-100 text-gray-900 text-lg block w-full px-10 py-5 mb-5"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FiLock className="text-gray-500" />
                    </div>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 text-gray-900 text-lg block w-full px-10 py-5"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="border-white border bg-customYellow text-white font-bold py-6 px-20 mt-10 mx-10 rounded-full focus:outline-white focus:border-white">
                    SIGN UP
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

