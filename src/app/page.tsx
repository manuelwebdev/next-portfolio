import ocean from './../../public/me_by_the_ocean.jpg'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { getAll } from '@vercel/edge-config'

export default function Home() {
  async function getGreeting() {
    const res = await getAll()
    // const data = await res.json()
    console.log(res)
  }
  getGreeting()
  return (
    <main className="h-full flex flex-col p-4 gap-6">
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
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Hi, I&apos;m Manuel</h1>
        <p className="text-lg">
          I like to build, tinker, create, discover, and learn new things on the
          internet.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">My Toolbox</h2>
        <div className="border-2 border-solid border-black"></div>
      </div>
    </main>
  )
}
