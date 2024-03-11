'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Project } from '../_components/projects/Projects'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export default function ProjectLayout({ project }: { project: Project }) {
  const [open, setOpen] = useState(true)
  const [index, setIndex] = useState(0)
  const { description, repository, stack, study } = project
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current)
  const carouselImages = study?.images?.map((img: any) => ({
    ...img,
    src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object${img?.src}`,
  }))
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
          <h3 className="text-heading3">Project:</h3>
          <Link
            href={repository}
            className="rounded-full border-2 border-solid border-primary bg-transparent px-3 text-primary duration-200 hover:bg-primary hover:text-white"
          >
            View
          </Link>
        </div>
      )}
      <div className="mt-5 flex h-auto w-full flex-col gap-3 overflow-y-auto">
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          slides={carouselImages}
          on={{ view: updateIndex }}
          plugins={[Inline, Zoom]}
          className="aspect-[3/2] w-full max-w-[85dvw] md:max-w-full"
          carousel={{ imageFit: 'contain' }}
        />
        <p>{study?.text}</p>
      </div>
    </div>
  )
}
