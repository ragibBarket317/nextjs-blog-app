import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PopularCategories from '@/components/PopularCategories'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCategories />
    </>
  )
}
