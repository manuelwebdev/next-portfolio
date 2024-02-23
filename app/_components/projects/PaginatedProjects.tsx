'use client'

import { useMemo, useState } from 'react'
import { Project } from './Projects'
import Card from './Card'
import Pagination from './Pagination'
import React from 'react'

export function paginate(
  array: any[],
  page_size: number = 1,
  page_number: number = 1,
) {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export default function PaginatedProjects({
  projects,
}: {
  projects: Project[]
}) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [projectsPerPage] = useState<number>(4)
  const totalPages = Math.ceil(projects?.length / projectsPerPage)
  const paginatedProjects = useMemo(
    () => paginate(projects, projectsPerPage, currentPage),
    [currentPage, projects],
  )

  return (
    <div className="h-full flex flex-col justify-between gap-2">
      <div className="h-max grid grid-cols-1 lg:grid-cols-2 gap-2">
        {paginatedProjects?.map((project: Project, index: number) => {
          return (
            <Card
              key={`project?.name-${index}`}
              imageUrl={project?.featured_image?.url}
              project={project}
            />
          )
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
