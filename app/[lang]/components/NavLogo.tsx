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
        <img className="w-12" src="https://strapi-h2ev.onrender.com/uploads/logo_light_ea5a2fd898.webp" alt="Monogram of Jess Louvel in white" width={210} height={263}/>
      ) : (
        <img className="w-12" src="https://strapi-h2ev.onrender.com/uploads/logo_black_9fd6d51de8.webp" alt="Monogram of Jess Louvel in black" width={210} height={263}/>
      )}
    </button>
  )
}

export default NavLogo
