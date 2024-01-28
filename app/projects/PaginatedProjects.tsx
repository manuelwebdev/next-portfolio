'use client'

import { useState } from 'react'
import { Project } from './ServerProjects'
import ProjectCard from './ProjectCard'

export function paginate(
  array: any[],
  page_size: number = 1,
  page_number: number = 1,
) {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export default function PaginatedProjects({ projects }: any) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil((projects?.length ?? 0) / 3)
  const paginatedProjects = paginate(projects ?? [], 3, currentPage)
  return (
    <>
      {paginatedProjects?.map((project: Project) => {
        return (
          <ProjectCard
            key={project?.name}
            imageUrl={'https://picsum.photos/seed/picsum/300/100'}
            title={project?.name}
            description={project?.description}
          />
        )
      })}
      <div className="grid grid-cols-3 gap-2">
        <p className="col-span-1 self-center justify-self-end text-paragraph">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="col-span-1 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="col-span-1 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  )
}
