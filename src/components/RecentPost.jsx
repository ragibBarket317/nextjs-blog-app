import Image from 'next/image'
import React from 'react'

const RecentPost = () => {
  return (
    <div>
      <div>
        <h2 className="text-[24px] font-bold mb-8">Recent Posts</h2>
        <div className="flex gap-8 mb-8">
          <div className="w-[40%]">
            <Image
              src="/culture.png"
              width={400}
              height={400}
              alt="Ragib"
              className="w-full h-[300px] object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center space-y-5">
            <p className="text-[14px]">
              30.12.2024 - <span className="text-red-700">CULTURE</span>
            </p>
            <h2 className="text-[24px] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae voluptate voluptatibus commodi perspiciatis nobis amet,
              soluta nemo aliquam culpa. Sed recusandae architecto reprehenderit
              aut praesentium dolores...
            </p>
            <div>
              <span className="border-b border-red-700">Read More</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="w-[40%]">
            <Image
              src="/food.png"
              width={400}
              height={400}
              alt="Ragib"
              className="w-full h-[300px] object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center space-y-5">
            <p className="text-[14px]">
              30.12.2024 - <span className="text-red-700">CULTURE</span>
            </p>
            <h2 className="text-[24px] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae voluptate voluptatibus commodi perspiciatis nobis amet,
              soluta nemo aliquam culpa. Sed recusandae architecto reprehenderit
              aut praesentium dolores...
            </p>
            <div>
              <span className="border-b border-red-700">Read More</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="w-[40%]">
            <Image
              src="/fashion.png"
              width={400}
              height={400}
              alt="Ragib"
              className="w-full h-[300px] object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center space-y-5">
            <p className="text-[14px]">
              30.12.2024 - <span className="text-red-700">CULTURE</span>
            </p>
            <h2 className="text-[24px] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae voluptate voluptatibus commodi perspiciatis nobis amet,
              soluta nemo aliquam culpa. Sed recusandae architecto reprehenderit
              aut praesentium dolores...
            </p>
            <div>
              <span className="border-b border-red-700">Read More</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="w-[40%]">
            <Image
              src="/coding.png"
              width={400}
              height={400}
              alt="Ragib"
              className="w-full h-[300px] object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center space-y-5">
            <p className="text-[14px]">
              30.12.2024 - <span className="text-red-700">CULTURE</span>
            </p>
            <h2 className="text-[24px] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae voluptate voluptatibus commodi perspiciatis nobis amet,
              soluta nemo aliquam culpa. Sed recusandae architecto reprehenderit
              aut praesentium dolores...
            </p>
            <div>
              <span className="border-b border-red-700">Read More</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8 my-8">
          <button className=" bg-red-700 text-gray-200 rounded py-2 px-4">
            Privious
          </button>
          <button className=" bg-red-700 text-gray-200 rounded py-2 px-4">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentPost
