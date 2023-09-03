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
        <img src="./logo-landing.png" alt="Logo of Jess Louvel in white" />
      ) : (
        <img src="./logo-landing-black.png" alt="Logo of Jess Louvel in black" />
      )}
		</div>
	);
}
