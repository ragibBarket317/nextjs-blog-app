import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Comments = () => {
  const status = 'authenticated'
  return (
    <div>
      <h2 className="text-[24px] font-bold mb-8">Comments</h2>
      {status === 'authenticated' ? (
        <div>
          <textarea
            type="text"
            rows="3"
            cols="50"
            placeholder="Add a comment..."
            className="w-full text-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          />
          <button className="mt-4 bg-teal-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Add Comment
          </button>

          <hr className="my-8 bg-gray-800"></hr>
          <div className="space-y-10">
            <div>
              <div className="w-full flex items-center gap-2 ">
                <div className="">
                  <Image
                    src="/culture.png"
                    width={50}
                    height={50}
                    alt="culture"
                    className="w-10 h-10 object-cover object-center rounded-full border-2 border-slate-600"
                  />
                </div>
                <div className=" space-y-1">
                  <h3 className="font-semibold text-[16px]">Ragib Barket</h3>
                  <div className="text-[12px]">
                    <span>30.12.2024</span>
                  </div>
                </div>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <div className="w-full flex items-center gap-2 ">
                <div className="">
                  <Image
                    src="/culture.png"
                    width={50}
                    height={50}
                    alt="culture"
                    className="w-10 h-10 object-cover object-center rounded-full border-2 border-slate-600"
                  />
                </div>
                <div className=" space-y-1">
                  <h3 className="font-semibold text-[16px]">Ragib Barket</h3>
                  <div className="text-[12px]">
                    <span>30.12.2024</span>
                  </div>
                </div>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <div className="w-full flex items-center gap-2 ">
                <div className="">
                  <Image
                    src="/culture.png"
                    width={50}
                    height={50}
                    alt="culture"
                    className="w-10 h-10 object-cover object-center rounded-full border-2 border-slate-600"
                  />
                </div>
                <div className=" space-y-1">
                  <h3 className="font-semibold text-[16px]">Ragib Barket</h3>
                  <div className="text-[12px]">
                    <span>30.12.2024</span>
                  </div>
                </div>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/login" className="mt-4 border-b border-teal-700 py-1">
          Login to add a comment
        </Link>
      )}
    </div>
  )
}

export default Comments
