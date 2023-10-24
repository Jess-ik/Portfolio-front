'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import React from 'react'

export default function LandingLogo() {
	const { resolvedTheme, setTheme } = useTheme()

	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
  
	if (!mounted) {
	  return null
	}

	return (
		<div className="logo-hero">
			<h1 className='hidden'>Jess Louvel - Creative + Developer</h1>
				{resolvedTheme === 'dark' ? (
        <img data-swiper-parallax="-2000" src="https://strapi-h2ev.onrender.com/uploads/logo_landing_9a50b372c9.webp" alt="Logo of Jess Louvel in white" width={1094} height={800}/>
      ) : (
        <img data-swiper-parallax="-2000" src="https://strapi-h2ev.onrender.com/uploads/logo_landing_black_f5f51722be.webp" alt="Logo of Jess Louvel in black" width={1094} height={800}/>
      )}
		</div>
	);
}
