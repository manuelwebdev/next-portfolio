import ocean from './../../public/me_by_the_ocean.jpg'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-column p-4">
      <div className="w-full grid grid-cols-8 gap-3 ">
        <div className="p-[1px] bg-black rounded-md col-span-6 border-2 border-solid border-black clip-path-documentShape">
          <Image
            src={ocean}
            alt="Me by the ocean"
            className="clip-path-documentShape  rounded-sm"
          />
        </div>
        <div className="col-span-2 grid grid-rows-4 gap-3">
          <Link
            href={'#'}
            className={`${buttonVariants({
              variant: 'outline',
            })} h-full flex flex-col gap-1`}
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href={'#'}
            className={`${buttonVariants({
              variant: 'outline',
            })} h-full flex flex-col gap-1`}
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href={'#'}
            className={`${buttonVariants({
              variant: 'outline',
            })} h-full flex flex-col gap-1`}
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href={'#'}
            className={`${buttonVariants({
              variant: 'outline',
            })} h-full flex flex-col gap-1`}
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </div>
      </div>
    </main>
  )
}
