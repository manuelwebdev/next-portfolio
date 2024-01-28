import ocean from './../public/me_by_the_ocean.jpg'
import me_back from './../public/me_back.webp'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import ServerData from './ServerData'
import { buttonVariants } from '@/components/ui/button'
import SocialsList from './socials/SocialsList'
import ToolboxList from './toolbox/ToolboxList'
import { IconContext } from 'react-icons'
import Projects from './projects/ServerProjects'
import TitleWrapper from './wrapper/TitleWrapper'
import ServerProjects from './projects/ServerProjects'

export default function Home({ data }: any) {
  return (
    <main className="h-full grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[masonry] p-4 gap-4">
      <div className="flex flex-col justify-center gap-5 w-full bg-foreground rounded-lg px-5 py-9">
        <h1 className="text-heading1 font-bold leading-[3rem]">
          Hello,
          <br /> I'm Manuel
        </h1>
        <p className="text-heading2 font-regular leading-[1.813rem]">
          A web developer. Since 2017 I&apos;ve been on a journey to create
          amazing digital experiences for people. Currently based in Lehi, Utah.
        </p>
        <Link
          href={'#projects'}
          className="text-heading3 bg-primary py-2 px-4 w-fit text-white rounded"
        >
          View My Work
        </Link>
        <div className="socialList flex gap-4">
          <SocialsList />
        </div>
      </div>
      <div className="">
        <Image
          className="w-full h-full object-cover rounded-md"
          src={ocean}
          alt="me by the ocean"
          loading="lazy"
          placeholder="blur"
          width={400}
          height={600}
        />
      </div>
      <div id="projects">
        <TitleWrapper title="Projects">
          <ServerProjects />
        </TitleWrapper>
      </div>
      <div id="toolbox">
        <TitleWrapper title="Toolbox">
          <ToolboxList />
        </TitleWrapper>
      </div>
      <div id="about">
        <TitleWrapper title="About">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              className="w-full h-full max-h-[300px] md:max-h-full object-cover rounded-md"
              src={me_back}
              alt="back of me while I take a photo"
              loading="lazy"
              placeholder="blur"
              width={400}
              height={600}
            />
            <p className="text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
              penatibus mus, sociis nec pellentesque sem neque morbi himenaeos
              aliquam ut integer taciti, primis cursus aptent nisi proin nunc id
              cras ridiculus. Fermentum laoreet dapibus porta integer nullam
              semper ultrices aliquet eu lacinia mus porttitor ullamcorper,
              vehicula velit nibh convallis morbi vulputate consequat potenti
              euismod mi non. A pretium nunc eleifend in augue penatibus
              dignissim enim taciti feugiat inceptos nascetur nisl justo
              habitasse aliquet, cum bibendum viverra consequat est nibh dui
              curabitur nec ultrices natoque lectus sagittis litora
              pellentesque.
            </p>
          </div>
        </TitleWrapper>
      </div>
      <div id="testimonial">
        <TitleWrapper title="Testimonial">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 bg-primary rounded-full"></div>
            <p className="w-full px-6 text-heading2">
              "His title was Junior Web Developer but his talent, empathy for
              the customer, and continued growth while at Lion demonstrate his
              value to any team he finds himself on. I hope to work with Manuel
              again."
            </p>
            <p className="w-full text-heading2 text-right">- Jeremy Barger</p>
          </div>
        </TitleWrapper>
      </div>
    </main>
  )
}
