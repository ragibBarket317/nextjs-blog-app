'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PopularCategories = () => {
  const [categories, setCategories] = useState([])

  console.log(categories)
  const fetchData = async () => {
    try {
      const response = await axios.get('api/category')
      if (response.status === 200) {
        setCategories(response.data.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="my-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-[18px] font-bold mb-8">Popular Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link href={`/category/${category.name}`} key={category._id}>
              <div className="dark:bg-slate-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={category.image}
                    width={500}
                    height={500}
                    alt="style"
                    className="w-8 h-8 object-cover object-center rounded-full border-2 border-slate-900"
                  />
                  <h2 className="text-[14px] font-semibold">{category.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularCategories
