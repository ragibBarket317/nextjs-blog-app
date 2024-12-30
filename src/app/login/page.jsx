import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-screen">
          <div className="w-[30%] p-5 pb-10 text-gray-200 bg-slate-700 rounded-md">
            <h2 className="text-[24px] font-bold text-center">Login</h2>
            <div>
              <div className="mt-5 px-4 py-2 bg-gray-200 rounded-md">
                <p className="text-gray-700 text-center">Login with Google</p>
              </div>
              <div className="mt-5 px-4 py-2 bg-gray-200 rounded-md">
                <p className="text-gray-700 text-center">Login with Facebook</p>
              </div>
              <div className="mt-5 px-4 py-2 bg-gray-200 rounded-md">
                <p className="text-gray-700 text-center">Login with Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
