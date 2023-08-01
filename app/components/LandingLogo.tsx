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
				{resolvedTheme === 'dark' ? (
        <img src="./logo-landing.png" alt="" />
      ) : (
        <img src="./logo-landing-black.png" alt="" />
      )}
		</div>
	);
}
