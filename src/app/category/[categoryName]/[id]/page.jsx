import Comments from '@/components/Comments'
import MostPopularPost from '@/components/MostPopularPost'

import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10">
          <div className="w-1/2 h-[450px] flex flex-col justify-between">
            <h2 className="text-[46px] font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
            <div className="">
              <div className="w-full flex  items-center gap-1 ">
                <div className="w-[12%]">
                  <Image
                    src="/culture.png"
                    width={50}
                    height={50}
                    alt="culture"
                    className="w-14 h-14 object-cover object-center rounded-full border-2 border-slate-600"
                  />
                </div>
                <div className="w-[88%] space-y-1">
                  <h3 className="font-semibold text-[20px]">Ragib Barket</h3>
                  <div className="text-[12px]">
                    <span>30 December 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/culture.png"
              width={400}
              height={400}
              alt="culture"
              className="w-full h-[450px] object-cover object-center rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-10">
            <div className="w-3/4">
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti possimus, dolorum sapiente molestiae odio odit
                  corrupti omnis debitis ad sed magnam totam, aperiam sint
                  facere, magni nihil? Eum, architecto obcaecati? Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Vel nam saepe
                  perspiciatis distinctio at molestiae pariatur id sit ut
                  dolores!
                </p>
                <br />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                  porro dicta quia hic, voluptate nam animi architecto fuga
                  provident qui dolores quis consectetur iusto quo ullam.
                  Excepturi magnam explicabo unde quas illum sit veniam dicta
                  mollitia beatae temporibus, error odio delectus dolores
                  voluptatem minus perferendis, ex saepe accusantium possimus
                  inventore. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Enim dolore, voluptatem sed deleniti officia, recusandae
                  nostrum laborum quae ipsa totam corporis, illum temporibus
                  illo. Temporibus explicabo placeat a recusandae ab ipsa sit
                  provident, illum tempore, repellat quos vel debitis fuga!
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit provident modi ad ratione tenetur facere ipsa nesciunt
                  veniam tempore dolores asperiores minus voluptas corrupti
                  porro optio non, eaque omnis ex. Quo perspiciatis velit
                  laborum tempore facere labore. Sunt repellat dolorem tempore
                  eligendi, voluptatibus assumenda quo modi illo consequatur
                  cumque est.
                </p>
              </article>
              {/* comments */}
              <div className="mt-10">
                <Comments />
              </div>
            </div>
            <div className="w-1/4">
              <MostPopularPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
