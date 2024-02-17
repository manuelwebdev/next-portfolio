'use client'

import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal'
import ProjectLayout from '../_layouts/ProjectLayout'
import { Project } from './ServerProjects'

export default function ProjectCard({
  imageUrl,
  project,
}: {
  imageUrl: string
  project: Project
}) {
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
            className="w-full object-cover rounded-sm "
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
