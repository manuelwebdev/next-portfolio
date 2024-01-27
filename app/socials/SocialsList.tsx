import { Button, buttonVariants } from '@/components/ui/button'
import { get } from '@vercel/edge-config'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { FaLinkedinIn } from 'react-icons/fa6'

// get socials from server
type Social = {
  name: string
  link: string
}
async function getSocials() {
  const data = await get<Social[]>('socials')
  return data
}

export default async function SocialsList() {
  const socials = await getSocials()
  return (
    <>
      {socials?.map((social: Social) => (
        <>
          <Link
            key={social?.name}
            href={social?.link}
            className={`p-3 border-2 border-solid border-black flex flex-col items-center justify-center rounded-md`}
          >
            <FaLinkedinIn />
            {/* {social?.name} */}
          </Link>
        </>
      ))}
    </>
  )
}
