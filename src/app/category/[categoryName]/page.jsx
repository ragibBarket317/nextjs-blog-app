import MostPopularPost from '@/components/MostPopularPost'
import RecentPost from '@/components/RecentPost'
import React from 'react'

const CategoryPage = ({ params }) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-2 px-4 bg-slate-500 mt-8">
          <h2 className="text-[24px] font-bold text-center text-gray-200">
            {params.categoryName} Blog
          </h2>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex gap-10">
            <div className="w-3/4">
              <RecentPost />
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

export default CategoryPage
