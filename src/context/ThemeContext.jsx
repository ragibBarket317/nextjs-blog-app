'use client'
import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light')

    setTheme(defaultTheme)
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {theme ? children : null}{' '}
      {/* Prevent rendering until theme is initialized */}
    </ThemeContext.Provider>
  )
}
