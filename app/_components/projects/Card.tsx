'use client'

import Image from 'next/image'
import Link from 'next/link'
import Modal from '../Modal'
import ProjectLayout from '../../_layouts/ProjectLayout'
import { Project } from './Projects'
import { Suspense } from 'react'

export default function Card({
  imageUrl,
  project,
}: {
  imageUrl: string
  project: Project
}) {
  return (
    <Modal
      trigger={
        <div className="w-full h-full p-2 bg-secondary rounded text-white flex flex-col items-start gap-3">
          <Image
            src={imageUrl}
            alt={`${project?.name}: ${project?.description}`}
            placeholder="blur"
            blurDataURL={project?.featured_image?.blurUrl}
            loading="lazy"
            width={400}
            height={400}
            className="w-full h-full max-h-40 object-cover object-top rounded-sm "
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
    >
      <ProjectLayout project={project} />
    </Modal>
  )
}
