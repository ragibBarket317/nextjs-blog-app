'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  console.log(value)

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-[46px] font-bold bg-transparent py-2  outline-none"
          />
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="bg-transparent mr-2"
            >
              <Image
                src="/plus.png"
                width={50}
                height={50}
                alt="plus"
                className="w-10 h-10 object-cover object-center rounded-full border-2 border-slate-700 dark:border-slate-400 dark:border-2 "
              />
            </button>
            {open && (
              <span className="ml-8">
                <button className="bg-transparent mr-2">
                  <Image
                    src="/image.png"
                    width={50}
                    height={50}
                    alt="plus"
                    className="w-10 h-10 p-1 object-cover object-center rounded-full border-2 border-slate-700 dark:border-slate-400 dark:border-2 "
                  />
                </button>
                <button className="bg-transparent mr-2">
                  <Image
                    src="/external.png"
                    width={50}
                    height={50}
                    alt="plus"
                    className="w-10 h-10 p-1 object-cover object-center rounded-full border-2 border-slate-700 dark:border-slate-400 dark:border-2 "
                  />
                </button>
                <button className="bg-transparent mr-2">
                  <Image
                    src="/video.png"
                    width={50}
                    height={50}
                    alt="plus"
                    className="w-10 h-10 p-1 object-cover object-center rounded-full border-2 border-slate-700 dark:border-slate-400 dark:border-2 "
                  />
                </button>
              </span>
            )}
            <div className="my-5">
              <select className="text-[18px] font-bold bg-transparent py-2 outline-none dark:text-gray-500">
                <option value="">Select your category</option>
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="culture">Culture</option>
                <option value="coding">Coding</option>
              </select>
            </div>
            <ReactQuill
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story"
              className="text-[28px]"
            />
          </div>
          <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow absolute top-3 right-5">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}

export default WritePage
