'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

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
        <img data-swiper-parallax="-2000" src="./logo-landing.webp" alt="Logo of Jess Louvel in white" width={800} height={800}/>
      ) : (
        <img data-swiper-parallax="-2000" src="./logo-landing-black.webp" alt="Logo of Jess Louvel in black" width={800} height={800}/>
      )}
		</div>
	);
}
