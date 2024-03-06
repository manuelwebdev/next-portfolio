import Link from 'next/link'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { Project, Study } from '../_components/projects/Projects'

export default function ProjectLayout({ project }: { project: Project }) {
  const { id, name, description, repository, stack, study, featured_image } =
    project
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-6 text-heading3 font-thin">{description}</h2>
      <div className="flex items-center gap-2">
        <h3 className="text-heading3">Stack:</h3>
        <div className="flex gap-1">
          {stack?.map((item: string, index: number) => (
            <p key={item} className="rounded-full bg-accent px-2">
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
            className="rounded-full border-2 border-solid border-primary bg-transparent px-3 text-primary duration-200 hover:bg-primary hover:text-white"
          >
            View
          </Link>
        </div>
      )}
      <div className="max-h- mt-5 flex h-auto flex-col gap-3 overflow-y-auto">
        {study &&
          study?.map((item: Study) => {
            return (
              <Suspense key={item?.text} fallback={<div>Loading...</div>}>
                {item?.type === 'image' ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object${item?.text}`}
                    alt={`${project?.name}: ${project?.description}`}
                    // placeholder="blur"
                    // blurDataURL={project?.featured_image?.blurUrl}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="max-h-[40rem] w-full max-w-[40rem] rounded-md object-contain object-top"
                  />
                ) : (
                  <p className="text-paragraph">{item?.text}</p>
                )}
              </Suspense>
            )
          })}
      </div>
    </div>
  )
}
