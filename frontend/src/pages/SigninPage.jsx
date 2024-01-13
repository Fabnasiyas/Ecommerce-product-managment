import React from "react";
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
const SigninPage = () => {
  const navigate = useNavigate();   
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:4000/login", values);
  
      if (response.status === 200) {
        toast.success('Successfully logged in');
        navigate('/home')
      } else if (response.status === 401 ) {
        toast.error("Incorrect email or password. Please try again.");
      } else {
        toast.error(`Failed to log in: ${response.data.message}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401 ) {
        toast.error("Incorrect email or password.");
      } else {
        console.error("Error:", error.message);
        toast.error("Failed to log in. Please try again.");
      }
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/4  flex items-center justify-center">
          <div className="text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-customYellow font-extrabold text-6xl font-montserrat mb-12">
                Sign In to Your Account
              </h1>

              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <AiOutlineMail className="text-gray-500" />
                    </div>
                    <Field
                      type="text"
                      id="email-address-icon"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100  text-gray-900 text-lg  block w-full px-10 py-5 mb-5 "
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
                      autoComplete="current-password"
                      placeholder="Password"
                      className="bg-gray-100 text-gray-900 text-lg  block w-full px-10 py-5"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <p className="mt-7 font-bold  text-xl underline">forgot password?</p>
                  <button
                    type="submit"
                    className="border-white border bg-customYellow  text-white font-bold py-6 px-20 mt-10 mx-10 rounded-full focus:outline-white focus:border-white"
                  >
                    SIGN IN
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="w-2/4 bg-customBlue flex items-center justify-center" s>
          <div className="text-center max-w-xl">
            <h1 className="text-white font-extrabold text-6xl font-montserrat mb-6">
              Hello Friend!
            </h1>
            <p className="text-white mt-4 text-2xl font-montserrat">
              Enter your personal details and <br />
              start your journey with us
            </p>
            <Link to='/'>
            <button className="border-white border bg-customBlue  text-white font-bold py-5 px-20 mt-7 rounded-full focus:outline-white focus:border-white">
              SIGN UP
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
