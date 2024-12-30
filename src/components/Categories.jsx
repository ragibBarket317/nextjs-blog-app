import React from 'react'

const Categories = () => {
  return (
    <div className="mt-10">
      <p>Discover by topic</p>
      <h2 className="text-[24px] font-bold mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-cyan-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Style</p>
        </div>
        <div className="bg-violet-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Fashoin</p>
        </div>
        <div className="bg-teal-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Food</p>
        </div>
        <div className="bg-pink-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Travel</p>
        </div>
        <div className="bg-amber-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Culture</p>
        </div>
        <div className="bg-blue-200 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <p className="text-center text-[13px] text-gray-700">Coding</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
