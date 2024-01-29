import * as Tabs from '@radix-ui/react-tabs'
import ocean from './../public/me_by_the_ocean.jpg'
import me_back from './../public/me_back.webp'
import Image from 'next/image'
import Link from 'next/link'
import SocialsList from './_components/SocialsList'
import ToolboxList from './_components/ToolboxList'
import TitleWrapper from './_components/TitleWrapper'
import ServerProjects from './_components/ServerProjects'
import ContactForm from './_components/ContactForm'
import Header from './_components/Header'

export default function Page() {
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
          <SocialsList color="black" />
        </div>
      </div>
      <Image
        className="w-full h-full max-h-[30rem] sm:max-h-[90dvh] object-cover object-bottom rounded-md"
        src={ocean}
        alt="me by the ocean"
        loading="lazy"
        placeholder="blur"
        width={400}
        height={600}
      />
      <TitleWrapper title="Projects" id="projects">
        <ServerProjects />
      </TitleWrapper>
      <TitleWrapper title="Toolbox" id="toolbox">
        <ToolboxList />
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
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
            penatibus mus, sociis nec pellentesque sem neque morbi himenaeos
            aliquam ut integer taciti, primis cursus aptent nisi proin nunc id
            cras ridiculus. Fermentum laoreet dapibus porta integer nullam
            semper ultrices aliquet eu lacinia mus porttitor ullamcorper,
            vehicula velit nibh convallis morbi vulputate consequat potenti
            euismod mi non. A pretium nunc eleifend in augue penatibus dignissim
            enim taciti feugiat inceptos nascetur nisl justo habitasse aliquet,
            cum bibendum viverra consequat est nibh dui curabitur nec ultrices
            natoque lectus sagittis litora pellentesque.
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
      <div
        id="footer"
        className="col-span-1 sm:col-span-2 flex flex-col items-center gap-3 py-3"
      >
        <p className="text-heading3 text-white">{`© Copyright ${new Date().getFullYear()} - Manuel Espinoza`}</p>
        <div className="socialList flex gap-4">
          <SocialsList color="white" />
        </div>
      </div>
    </main>
  )
}
