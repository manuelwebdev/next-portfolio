'use client'

import Link from 'next/link'
import { IconContext } from 'react-icons'
import {
  FaLinkedinIn,
  FaGithub,
  FaFileContract,
  FaEnvelope,
} from 'react-icons/fa6'
import * as Tooltip from '@radix-ui/react-tooltip'

export type Social = {
  name: string
  link: string
}

export default function SocialsList({ socials }: { socials: Social[] | any }) {
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
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={200}>
              <Tooltip.Trigger asChild>
                <Link
                  key={social?.name}
                  href={
                    social?.name === 'Resume'
                      ? '/resume-manuel-espinoza-2024.pdf'
                      : social?.link
                  }
                  target="_blank"
                  className={`duration-400 group flex flex-col items-center justify-center rounded-full border-2 border-transparent bg-secondary p-3 transition-all hover:scale-105 hover:border-background hover:bg-secondary hover:shadow-xl hover:duration-300`}
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
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                  sideOffset={5}
                >
                  {social?.name}
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )
      })}
    </>
  )
}
