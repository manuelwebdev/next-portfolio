import ocean from './../public/me_by_the_ocean.jpg'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import ServerData from './ServerData'
import { buttonVariants } from '@/components/ui/button'
import SocialsList from './socials/SocialsList'
import ToolboxList from './toolbox/ToolboxList'
import { IconContext } from 'react-icons'

export default function Home({ data }: any) {
  const HEADING1 = 'text-heading1 font-bold'
  return (
    <main className="h-full flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-5 w-full bg-foreground rounded-lg p-6">
        <h1 className="text-heading1 font-bold leading-[3rem]">
          Hello,
          <br /> I'm Manuel
        </h1>
        <p className="text-heading2 font-medium leading-[1.813rem]">
          A web developer. Since 2017 I&apos;ve been on a journey to create
          amazing digital experiences for people. Currently based in Lehi, Utah.
        </p>
        <Link
          href={''}
          className="bg-primary py-2 px-4 w-fit text-white rounded"
        >
          View My Work
        </Link>
        <div className="socialList flex gap-4">
          <SocialsList />
        </div>
      </div>
      <div className="">
        <Image
          className="clip-path-documentShape rounded-md"
          src={ocean}
          alt="me by the ocean"
        />
      </div>
      {/* <div className="w-full grid grid-cols-8 gap-3 ">
        <div className="parent Grid-Grouping p-[1px] rounded-md col-span-6">
          <Image
            className="clip-path-documentShape rounded-md"
            src={ocean}
            alt="me by the ocean"
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
        <iframe
          className="rounded-md"
          src="https://open.spotify.com/embed/playlist/21rxvdHPMHhgFTLhz9Ohdw?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div> */}
    </main>
  )
}
