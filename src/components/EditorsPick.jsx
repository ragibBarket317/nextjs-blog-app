import Image from 'next/image'
import React from 'react'

const EditorsPick = () => {
  return (
    <div className="my-8">
      <p>Chosen by the editor</p>
      <h2 className="text-[24px] font-bold mb-8">Editors Pick</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-1">
          <div className="w-[25%]">
            <Image
              src="/culture.png"
              width={50}
              height={50}
              alt="culture"
              className="w-14 h-14 object-cover object-center rounded-full border-2 border-slate-600"
            />
          </div>
          <div className="shrink w-[70%] space-y-1">
            <div>
              <span className="bg-orange-500 px-4 py-1 rounded-full font-semibold text-[10px]">
                Travel
              </span>
            </div>
            <h3 className="font-semibold mt-3 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span className="font-semibold">Jon Doe </span>- 30.12.2024
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[25%]">
            <Image
              src="/culture.png"
              width={50}
              height={50}
              alt="culture"
              className="w-14 h-14 object-cover object-center rounded-full border-2 border-slate-600"
            />
          </div>
          <div className="shrink w-[70%] space-y-1">
            <div>
              <span className="bg-orange-500 px-4 py-1 rounded-full font-semibold text-[10px]">
                Travel
              </span>
            </div>
            <h3 className="font-semibold mt-3 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span className="font-semibold">Jon Doe </span>- 30.12.2024
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[25%]">
            <Image
              src="/culture.png"
              width={50}
              height={50}
              alt="culture"
              className="w-14 h-14 object-cover object-center rounded-full border-2 border-slate-600"
            />
          </div>
          <div className="shrink w-[70%] space-y-1">
            <div>
              <span className="bg-orange-500 px-4 py-1 rounded-full font-semibold text-[10px]">
                Travel
              </span>
            </div>
            <h3 className="font-semibold mt-3 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span className="font-semibold">Jon Doe </span>- 30.12.2024
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorsPick
