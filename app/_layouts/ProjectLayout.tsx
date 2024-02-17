import { Dialog } from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'
import { Project } from '../_components/projects/Projects'

export default function ProjectLayout({
  children,
  project,
}: {
  children: React.ReactNode
  project: Project
}) {
  // const { tags = [], link = '' } = project
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="flex items-center gap-2">
        <h3 className="text-heading3">Stack:</h3>
        <div className="flex gap-1">
          {tags?.map((item: string) => (
            <p key={item} className="border border-primary rounded-full px-2">
              {item}
            </p>
          ))}
        </div>
      </div>
      {link && (
        <div className="flex items-center gap-2">
          <h3 className="text-heading3">Respository:</h3>
          <Link
            href={link}
            className="bg-transparent hover:bg-primary duration-200 border-2 border-primary border-solid rounded-full px-3 text-primary hover:text-white"
          >
            View
          </Link>
        </div>
      )} */}
    </div>
  )
}
