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
      className='pb-10 md:pb-0'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className='h-5 w-5 text-[#e7e6e2] ' />
      ) : (
        <BsMoonStarsFill className='h-5 w-5 text-[#0d2c32]' />
      )}
    </button>
  )
}

export default ThemeButton
