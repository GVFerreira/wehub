'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Logotype(){
  const { theme } = useTheme()

  return ( 
    <Image
      src={theme === 'dark' ? '/assets/logotipo-white.png' : '/assets/logotipo-black.png'}
      alt="We Hub"
      className="h-14 w-auto"
      width={1000}
      height={1000}
      quality={100}
    /> 
  )
}
