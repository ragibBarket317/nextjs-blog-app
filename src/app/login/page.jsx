'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log('Login success', response.data)
      if (response.status === 200) {
        router.push('/')
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25%] dark:bg-gray-800 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">
          {loading ? 'Processing' : 'Login'}
        </h1>
        <div className="space-y-4">
          <div className="mt-10">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none dark:text-gray-700"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="px-4 py-2 w-full border border-gray-300 rounded-md outline-none dark:text-gray-700"
            />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="px-4 py-2 border border-gray-300 rounded-md w-full bg-gray-700 text-white"
              disabled={buttonDisabled}
            >
              {buttonDisabled ? 'No Login' : 'Login'}
            </button>
            <p className="mt-3 text-[12px] text-center">
              Are you new here?{' '}
              <Link href="/signup" className="text-blue-500">
                Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
