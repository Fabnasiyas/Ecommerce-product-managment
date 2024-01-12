import React from "react";
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
const SigninPage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/4  flex items-center justify-center">
          <div className="text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-customYellow font-extrabold text-6xl font-montserrat mb-12">
                Sign In to Your Account
              </h1>

              <form className="max-w-sm mx-auto">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <AiOutlineMail className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-100  text-gray-900 text-lg  block w-full px-10 py-5 mb-5 "
                    placeholder="Email"
                  />
                </div>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FiLock className="text-gray-500" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    className="bg-gray-100 text-gray-900 text-lg  block w-full px-10 py-5"
                  />
                </div>
                <p className="mt-7 font-bold  text-xl underline">
                  forgot password?
                </p>
                <button className="border-white border bg-customYellow  text-white font-bold py-6 px-20 mt-10 mx-10 rounded-full focus:outline-white focus:border-white">
                  SIGN IN
                </button>
              </form>
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
            <button className="border-white border bg-customBlue  text-white font-bold py-5 px-20 mt-7 rounded-full focus:outline-white focus:border-white">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
