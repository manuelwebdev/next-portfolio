'use client'
import { Button, buttonVariants } from '@/components/ui/button'
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
async function getSocials() {
  const data = await get<Social[]>('socials')
  return data
}

export default async function SocialsList({ color }: { color: string }) {
  const socials = await getSocials()
  return (
    <>
      {socials?.map((social: Social) => {
        console.log(social.name)
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
          <>
            <Link
              key={social?.name}
              href={social?.link}
              target="_blank"
              className={`p-3 border-2 border-solid border-${color} flex flex-col items-center justify-center rounded-full`}
            >
              <IconContext.Provider
                value={{
                  color: color,
                  size: '1.5rem',
                  className: 'w-6 h-6',
                }}
              >
                {socialIcon}
              </IconContext.Provider>
              {/* {social?.name} */}
            </Link>
          </>
        )
      })}
    </>
  )
}
