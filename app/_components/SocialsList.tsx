'use client'

import { get } from '@vercel/edge-config'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import {
  FaLinkedinIn,
  FaGithub,
  FaFileContract,
  FaEnvelope,
} from 'react-icons/fa6'

// get socials from server
type Social = {
  name: string
  link: string
}

export default async function SocialsList({
  socials,
}: {
  socials: Social[] | any
}) {
  return (
    <>
      {socials?.map((social: Social) => {
        let socialIcon
        switch (social?.name) {
          case 'LinkedIn':
            socialIcon = <FaLinkedinIn />
            break
          case 'Github':
            socialIcon = <FaGithub />
            break
          case 'Resume':
            socialIcon = <FaFileContract />
            break
          case 'Email':
            socialIcon = <FaEnvelope />
            break

          default:
            break
        }
        return (
          <Link
            key={social?.name}
            href={social?.link}
            target="_blank"
            className={`group bg-secondary p-3 border-transparent border-2 hover:border-background flex flex-col items-center justify-center rounded-full hover:bg-secondary transition-all duration-400 hover:duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <IconContext.Provider
              value={{
                color: 'white',
                size: '1.5rem',
                className: `group-hover:fill-white group-hover:duration-300 duration-700 w-6 h-6`,
              }}
            >
              {socialIcon}
            </IconContext.Provider>
            {/* {social?.name} */}
          </Link>
        )
      })}
    </>
  )
}
