'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'


const NavLogo = () => {
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
      
   
    >
      {resolvedTheme === 'dark' ? (
        <img className="w-12" src="/logo-light.png" alt="logo" />
      ) : (
        <img className="w-12" src="/logo-black.png" alt="logo" />
      )}
    </button>
  )
}

export default NavLogo
