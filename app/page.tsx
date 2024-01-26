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
        <div className="parent Grid-Grouping p-[1px] rounded-md col-span-6">
          <Image
            className="clip-path-documentShape rounded-md"
            src={ocean}
            alt="me by the ocean"
          />
          <svg
            className="invisible absolute;"
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
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
      </div>
    </main>
  )
}
