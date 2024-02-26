'use client'
import React from 'react'
import SocialsList from './SocialsList'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export default function Footer({ serverData }: { serverData: any }) {
  return (
    <footer
      id="footer"
      className="col-span-1 flex h-full max-h-fit flex-col items-center gap-3 rounded-lg bg-foreground px-5 py-3 pb-7 pt-5 sm:col-span-2"
    >
      <p className="text-heading3 text-black">{`© Copyright ${new Date().getFullYear()} - Manuel Espinoza`}</p>
      <div className="socialList flex gap-4">
        <SocialsList socials={serverData?.socials ?? []} />
      </div>
    </footer>
  )
}
