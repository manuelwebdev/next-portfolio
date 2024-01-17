import ocean from './../public/me_by_the_ocean.jpg'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import ServerData from './ServerData'
import { buttonVariants } from '@/components/ui/button'
import SocialsList from './socials/SocialsList'
import ToolboxList from './toolbox/ToolboxList'

export default function Home({ data }: any) {
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
          <SocialsList />
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
        <div className="border-2 border-solid border-black p-3 flex flex-col gap-3">
          <ToolboxList />
        </div>
      </div>
    </main>
  )
}
