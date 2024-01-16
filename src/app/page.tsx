import ocean from './../../public/me_by_the_ocean.jpg'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

export default function Home() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript (ES5/ES6+)',
    'TypeScript',
    'Git',
    'GitHub',
    'SQL',
    'ReactJS',
    'VueJS',
    'Material UI',
    'Tailwind',
    'Bootstrap',
    'SASS',
    'NodeJS',
    'NestJS',
    'ExpressJS',
    'MongoDB',
    'Wordpress',
    'Figma',
    'Illustrator',
    'Responsive Design',
    'Wireframing',
  ]
  console.log(
    skills.map((skill) => {
      return { name: skill }
    }),
  )
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
