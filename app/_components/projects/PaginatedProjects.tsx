'use client'

import { useMemo, useState } from 'react'
import { Project } from './Projects'
import Card from './Card'
import Pagination from './Pagination'

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
    [currentPage],
  )

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {paginatedProjects?.map((project: Project, index: number) => {
          return (
            <Card
              key={`project?.name-${index}`}
              imageUrl={project?.featured_image}
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
      {/* <div className="flex flex-row justify-end gap-2">
        <p className="self-center justify-self-end text-paragraph">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => setCurrentPage(Number(currentPage) - 1)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage(Number(currentPage) + 1)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </>
  )
}
