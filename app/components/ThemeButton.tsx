'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";


const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className='h-5 w-5 text-white]' />
      ) : (
        <BsMoonStarsFill className='h-5 w-5 text-[#0f0316]' />
      )}
    </button>
  )
}

export default ThemeButton
