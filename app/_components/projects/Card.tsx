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
  // console.log(
  //   { imageUrl, project },
  //   `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object${imageUrl}`,
  // )
  return (
    <Modal
      trigger={
        <div className="flex h-full w-full flex-col items-start gap-3 rounded bg-secondary p-2 text-white">
          <Image
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object${imageUrl}`}
            alt={`${project?.name}: ${project?.description}`}
            // placeholder="blur"
            // blurDataURL={project?.featured_image?.blurUrl}
            loading="lazy"
            width={400}
            height={400}
            className="h-full max-h-40 w-full rounded-sm object-cover object-top "
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading3 font-bold leading-5 md:text-heading2">
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
