'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'

const DarkModeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-700 w-10 h-10 dark:bg-gray-700 text-black dark:text-white rounded-md flex items-center justify-center"
    >
      {theme === 'light' ? (
        <Image src="/sun.png" width={20} height={20} alt="sun" />
      ) : (
        <Image src="/moon.png" width={20} height={20} alt="moon" />
      )}
    </button>
  )
}

export default DarkModeButton
