import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import logo from './../../public/Logo.svg'

export default async function Header() {
  return (
    <div className="col-span-1 sm:col-span-2 rounded-lg grid grid-cols-[1fr_8rem] gap-4">
      <div className="flex items-center gap-2 bg-foreground py-1 px-3 sm:px-6 rounded-lg">
        <Image src={logo} alt={'logo'} />
        <h1 className="text-heading2 font-bold leading-6 hidden sm:block">
          Manuel Espinoza
        </h1>
      </div>
      <Link
        href={'https://www.linkedin.com/in/manuelwebdev/'}
        target="_blank"
        className="bg-accent rounded-lg flex items-center justify-center gap-1 text-sm sm:text-paragraph"
      >
        Let&lsquo;s Connect
        <FaArrowRight />
      </Link>
    </div>
  )
}
