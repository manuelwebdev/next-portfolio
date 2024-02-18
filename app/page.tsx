import vineyard from './../public/me_in_vineyard.jpg'
import me_back from './../public/me_back.webp'
import Image from 'next/image'
import Link from 'next/link'
import SocialsList, { Social } from './_components/SocialsList'
import ToolboxList, { Skill } from './_components/ToolboxList'
import TitleWrapper from './_components/TitleWrapper'
import Projects, { Project } from './_components/projects/Projects'
import ContactForm from './_components/ContactForm'
import Header from './_components/Header'
import { getAll } from '@vercel/edge-config'
import { Suspense } from 'react'

type ServerData = {
  skills: Skill[]
  socials: Social[]
}

async function getServerData() {
  try {
    return await getAll<ServerData>()
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw new Error(
        'Portfolio:page.tsx: An unknown error occurred',
        error as Error,
      )
    }
  }
}

export default async function Page() {
  const serverData = (await getServerData()) || {}
  return (
    <main className="h-full grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
      <Header />
      <div className="flex flex-col justify-center gap-5 w-full sm:max-h-[90dvh] bg-foreground rounded-lg px-5 py-9">
        <h2 className="text-heading1 font-bold leading-[3rem]">
          Hello,
          <br /> I&lsquo;m Manuel
        </h2>
        <p className="max-w-[450px] text-heading2 font-regular leading-[1.813rem]">
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
          <SocialsList socials={serverData?.socials} />
        </div>
      </div>
      <Image
        className="w-full h-full max-h-[30rem] sm:max-h-[90dvh] object-cover object-bottom rounded-md"
        src={vineyard}
        alt="me in a vineyard"
        loading="lazy"
        placeholder="blur"
        width={400}
        height={600}
      />
      <TitleWrapper title="Projects" id="projects">
        <Projects />
      </TitleWrapper>
      <TitleWrapper title="Toolbox" id="toolbox">
        <ToolboxList skills={serverData?.skills} />
      </TitleWrapper>
      <TitleWrapper title="About" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            Hello, I&apos;m Manuel—a passionate web developer and designer
            dedicated to crafting exceptional digital experiences. With a keen
            eye for aesthetics and a love for problem-solving, I specialize in
            frontend development, designing and building visually stunning
            websites. I also delve into the world of backend development,
            crafting robust APIs to enhance the functionality and interactivity
            of web applications.
            <br />
            <br />
            Beyond the realm of coding, I immerse myself in various hobbies. As
            an avid Dungeons & Dragons player, I explore imaginative realms and
            spin epic tales. In the kitchen, I channel my creativity into
            cooking and savoring diverse cuisines, always on the lookout for new
            flavors and culinary techniques. When away from the computer screen,
            I unwind by indulging in my favorite TV shows and movies or diving
            into the immersive worlds of video games.
            <br />
            <br />
            Originally from the sunny state of California, my journey has led me
            to call Utah home for the majority of my life. Let&apos;s connect as
            I continue on this perpetual journey of learning, blending
            creativity, technology, and a dash of personal flair to deliver
            memorable online experiences.
          </p>
        </div>
      </TitleWrapper>
      <TitleWrapper id="testimonial">
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <div className="w-14 h-14 bg-primary rounded-full"></div>
          <p className="w-full px-6 text-heading3 md:text-heading2">
            &lsquo;&lsquo;His title was Junior Web Developer but his talent,
            empathy for the customer, and continued growth while at Lion
            demonstrate his value to any team he finds himself on. I hope to
            work with Manuel again.&lsquo;&lsquo;
          </p>
          <p className="w-full text-heading3 md:text-heading2 text-right">
            - Jeremy Barger
          </p>
        </div>
      </TitleWrapper>
      <TitleWrapper title="Contact" id="contact">
        <ContactForm />
      </TitleWrapper>
      <TitleWrapper title="Playlist" id="playlist">
        <iframe
          src="https://open.spotify.com/embed/playlist/3hlmdEryvkBpiyp0oSC3tA?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </TitleWrapper>
      <footer
        id="footer"
        className="col-span-1 sm:col-span-2 flex flex-col items-center gap-3 py-3"
      >
        <p className="text-heading3 text-white">{`© Copyright ${new Date().getFullYear()} - Manuel Espinoza`}</p>
        <div className="socialList flex gap-4">
          <SocialsList socials={serverData?.socials ?? []} />
        </div>
      </footer>
    </main>
  )
}
