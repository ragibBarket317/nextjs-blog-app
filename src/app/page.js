import Hero from '@/components/Hero'
import MostPopularPost from '@/components/MostPopularPost'
import Navbar from '@/components/Navbar'
import PopularCategories from '@/components/PopularCategories'
import RecentPost from '@/components/RecentPost'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCategories />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10">
          <div className="w-3/4">
            <RecentPost />
          </div>
          <div className="w-1/4">
            <MostPopularPost />
          </div>
        </div>
      </div>
    </>
  )
}
