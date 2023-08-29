import React from 'react'

interface PageHeadProps {
  subtitle: string;
  title: string;
}

// import { Yeseva_One } from "next/font/google";

// export const yeseva = Yeseva_One({
// 	weight: ["400"],
// 	style: ["normal"],
// 	subsets: ["latin"],
// });

export default function PageHead(props: PageHeadProps) {
  return (
    <div className="px-4 md:px-32 pt-40 text-center">
      {/* <h5 className={`${yeseva.className} dark:text-[#c0ccbb]`}>{props.subtitle}</h5> */}
      <h5 className={`yeseva dark:text-[#c0ccbb]`}>{props.subtitle}</h5>
      <h1 className='dark:text-[#E7E6E2]'>{props.title}</h1>
  </div>
  )
}
