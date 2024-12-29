import Image from 'next/image'
import React from 'react'

const PopularCategories = () => {
  return (
    <div className="my-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[18px] font-bold mb-8">Popular Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="dark:bg-slate-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/free-style.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-slate-900"
              />
              <h2 className="text-[14px] font-semibold">Style</h2>
            </div>
          </div>
          <div className="dark:bg-pink-950 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/brand.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-pink-700"
              />
              <h2 className="text-[14px] font-semibold">Fashion</h2>
            </div>
          </div>
          <div className="dark:bg-green-950 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/diet.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-green-700"
              />
              <h2 className="text-[14px] font-semibold">Food</h2>
            </div>
          </div>
          <div className="dark:bg-violet-950 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/travel-02.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-violet-700"
              />
              <h2 className="text-[14px] font-semibold">Travel</h2>
            </div>
          </div>
          <div className="dark:bg-amber-950 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/ethnic.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-amber-700"
              />
              <h2 className="text-[14px] font-semibold">Culture</h2>
            </div>
          </div>
          <div className="dark:bg-orange-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/programming.png"
                width={500}
                height={500}
                alt="style"
                className="w-8 h-8 object-cover object-center rounded-full border-2 border-orange-700"
              />
              <h2 className="text-[14px] font-semibold">Coding</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories
