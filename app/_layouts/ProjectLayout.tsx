import { Dialog } from '@radix-ui/react-dialog'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Project, Study } from '../_components/projects/Projects'

export default function ProjectLayout({ project }: { project: Project }) {
  console.log(project)
  const { id, name, description, repository, stack, study, featured_image } =
    project
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-6 text-heading3 font-thin">{description}</h2>
      <div className="flex items-center gap-2">
        <h3 className="text-heading3">Stack:</h3>
        <div className="flex gap-1">
          {stack?.map((item: string, index: number) => (
            <p key={item} className="px-2 bg-accent rounded-full">
              {item}
            </p>
          ))}
        </div>
      </div>
      {repository && (
        <div className="flex items-center gap-2">
          <h3 className="text-heading3">Respository:</h3>
          <Link
            href={repository}
            className="bg-transparent hover:bg-primary duration-200 border-2 border-primary border-solid rounded-full px-3 text-primary hover:text-white"
          >
            View
          </Link>
        </div>
      )}
      <div className="mt-5 flex flex-col gap-3 h-auto max-h- overflow-y-auto">
        {study &&
          study?.map((item: Study) => {
            return (
              <>
                {item?.type === 'image' ? (
                  <Image
                    src={item?.text}
                    alt={`${project?.name}: ${project?.description}`}
                    placeholder="blur"
                    blurDataURL={project?.featured_image?.blurUrl}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full max-w-[40rem] max-h-[40rem] object-contain object-top rounded-md"
                  />
                ) : (
                  <p className="text-paragraph">{item?.text}</p>
                )}
              </>
            )
          })}
      </div>
    </div>
  )
}
