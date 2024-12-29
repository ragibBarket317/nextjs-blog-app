import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[60px] mt-24">
          <b>Hey, Ragib Barket here!</b> Discover my stories and creative ideas.
        </h1>
        <div className="my-8 flex gap-10">
          <div className="w-1/2">
            <Image
              src="/culture.png"
              width={400}
              height={400}
              alt="Ragib"
              className="w-full h-[450px] object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center space-y-5">
            <h2 className="text-[24px] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum aliquam tempore.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae voluptate voluptatibus commodi perspiciatis nobis amet,
              soluta nemo aliquam culpa. Sed recusandae architecto reprehenderit
              aut praesentium dolores iusto consectetur expedita accusamus
              blanditiis, ex excepturi voluptatem, nihil magni voluptate
              doloribus voluptatum.
            </p>
            <button className="bg-gray-800 text-gray-200 w-1/4 dark:bg-gray-100 dark:text-gray-800 py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
