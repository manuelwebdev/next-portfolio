'use client'

import Image from 'next/image'
import Link from 'next/link'
import Modal from '../Modal'
import ProjectLayout from '../../_layouts/ProjectLayout'
import { Project } from './Projects'

export default function Card({
  imageUrl,
  project,
}: {
  imageUrl: string
  project: Project
}) {
  const test = {
    socials: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/manuelwebdev/',
      },
      {
        name: 'Github',
        link: 'https://github.com/manuelwebdev',
      },
      {
        name: 'Resume',
        link: '#',
      },
      {
        name: 'Email',
        link: 'mailto:mfe.webdev@gmail.com',
      },
    ],
    skills: [
      {
        name: 'HTML',
        type: 'technical',
        icon: './icons/html.svg',
      },
      {
        name: 'CSS',
        type: 'technical',
        icon: './icons/css.svg',
      },
      {
        name: 'JavaScript (ES5/ES6+)',
        type: 'technical',
        icon: './icons/javascript.svg',
      },
      {
        name: 'TypeScript',
        type: 'technical',
        icon: './icons/typescript.svg',
      },
      {
        name: 'Git',
        type: 'technical',
        icon: './icons/html.svg',
      },
      {
        name: 'GitHub',
        type: 'technical',
        icon: './icons/github.svg',
      },
      {
        name: 'SQL',
        type: 'technical',
        icon: './icons/sql.svg',
      },
      {
        name: 'ReactJS',
        type: 'technical',
        icon: './icons/react.svg',
      },
      {
        name: 'NextJS',
        type: 'technical',
        icon: './icons/nextjs.svg',
      },
      {
        name: 'VueJS',
        type: 'technical',
        icon: './icons/vue.svg',
      },
      {
        name: 'Material UI',
        type: 'technical',
        icon: './icons/mui.svg',
      },
      {
        name: 'Tailwind',
        type: 'technical',
        icon: './icons/tailwind.svg',
      },
      {
        name: 'Bootstrap',
        type: 'technical',
        icon: './icons/html.svg',
      },
      {
        name: 'SASS',
        type: 'technical',
        icon: './icons/sass.svg',
      },
      {
        name: 'NodeJS',
        type: 'technical',
        icon: './icons/node.svg',
      },
      {
        name: 'NestJS',
        type: 'technical',
        icon: './icons/nestjs.svg',
      },
      {
        name: 'ExpressJS',
        type: 'technical',
        icon: './icons/expressjs.svg',
      },
      {
        name: 'MongoDB',
        type: 'technical',
        icon: './icons/html.svg',
      },
      {
        name: 'Wordpress',
        type: 'technical',
        icon: './icons/wordpress.svg',
      },
      {
        name: 'Figma',
        type: 'technical',
        icon: './icons/figma.svg',
      },
      {
        name: 'Illustrator',
        type: 'technical',
        icon: './icons/illustrator.svg',
      },
      {
        name: 'Responsive Design',
        type: 'technical',
        icon: './icons/mobile.svg',
      },
      {
        name: 'Wireframing',
        type: 'technical',
        icon: './icons/wireframe.svg',
      },
      {
        name: 'Feedback Oriented',
        type: 'community',
        icon: './icons/feedback.svg',
      },
      {
        name: 'Collaborator',
        type: 'community',
        icon: './icons/collaborate.svg',
      },
      {
        name: 'Problem Solving',
        type: 'community',
        icon: './icons/idea.svg',
      },
      {
        name: 'Organized',
        type: 'community',
        icon: './icons/organized.svg',
      },
      {
        name: 'Adaptability',
        type: 'community',
        icon: './icons/adapt.svg',
      },
      {
        name: 'Communication',
        type: 'community',
        icon: './icons/communicate.svg',
      },
      {
        name: 'Meetups',
        type: 'community',
        icon: './icons/meetup.svg',
      },
      {
        name: 'Conferences',
        type: 'community',
        icon: './icons/conference.svg',
      },
    ],
    projects: [
      {
        id: '1',
        name: 'Lion Energy Alerts',
        description: 'Fullstack Feature',
        link: '#',
        tags: ['Node.js', 'React', 'NestJS', 'MUI', 'Typescript', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '2',
        name: 'Surfait',
        description: 'Project 2 description',
        link: '#',
        tags: ['React', 'MUI', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '3',
        name: 'Everlast Ink',
        description: 'Project 3 description',
        link: '#',
        tags: ['Node.js', 'React', 'Radix', 'Typescript', 'Remix'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '4',
        name: 'Diana Sparkles',
        description: 'Fullstack Feature',
        link: '#',
        tags: ['Node.js', 'React', 'NestJS', 'MUI', 'Typescript', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '5',
        name: 'Express Blog',
        description: 'Project 2 description',
        link: '#',
        tags: ['React', 'MUI', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '6',
        name: 'MERN Superheroes',
        description: 'Project 3 description',
        link: '#',
        tags: ['Node.js', 'React', 'Radix', 'Typescript', 'Remix'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '7',
        name: 'Project 6',
        description: 'Fullstack Feature',
        link: '#',
        tags: ['Node.js', 'React', 'NestJS', 'MUI', 'Typescript', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '8',
        name: 'Project 7',
        description: 'Project 2 description',
        link: '#',
        tags: ['React', 'MUI', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '9',
        name: 'Project 8',
        description: 'Project 3 description',
        link: '#',
        tags: ['Node.js', 'React', 'Radix', 'Typescript', 'Remix'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '10',
        name: 'Project 9',
        description: 'Fullstack Feature',
        link: '#',
        tags: ['Node.js', 'React', 'NestJS', 'MUI', 'Typescript', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '11',
        name: 'Project 10',
        description: 'Project 2 description',
        link: '#',
        tags: ['React', 'MUI', 'Javascript'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
      {
        id: '12',
        name: 'Project 11',
        description: 'Project 3 description',
        link: '#',
        tags: ['Node.js', 'React', 'Radix', 'Typescript', 'Remix'],
        study: [
          {
            type: 'image',
            text: './images/nextjs.png',
          },
          {
            type: 'text',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam fringilla, eleifend senectus neque tempor suscipit et auctor tortor augue, curabitur etiam pretium ac primis aptent ante libero. Porttitor auctor habitant vitae venenatis imperdiet tellus himenaeos lobortis sociosqu euismod nisl, mollis tempus magna vehicula torquent enim tincidunt inceptos posuere. Auctor cursus torquent lectus convallis.',
          },
        ],
      },
    ],
  }
  return (
    <Modal
      trigger={
        <div className="w-full p-2 bg-secondary rounded text-white flex flex-col items-start gap-3">
          <Image
            src={imageUrl}
            alt={`${project?.name}: ${project?.description}`}
            width={1000}
            height={1000}
            loading="lazy"
            className="w-full max-h-40 object-cover object-top rounded-sm "
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading3 md:text-heading2 font-bold leading-5">
              {project?.name}
            </h2>
            <p className="text-paragraph">{project?.description}</p>
          </div>
        </div>
      }
      title={project?.name}
      children={<ProjectLayout children={undefined} project={project} />}
    />
  )
}
