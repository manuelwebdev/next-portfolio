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

type project = {
  name: string
  description: string
  link: string
  tags: string[]
}

export default function PaginatedProjects({
  projects,
}: {
  projects: project[]
}) {
  // take in projects and paginate them by 4 and create next and previous buttons to navigate between pages

  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage] = useState(4)
  const totalPages = Math.ceil(projects?.length / projectsPerPage)
  const paginatedProjects = paginate(projects, projectsPerPage, currentPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleLastPage = () => {
    setCurrentPage(totalPages)
  }

  const handleFirstPage = () => {
    setCurrentPage(1)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {paginatedProjects?.map((project: project, index: number) => {
          return (
            <ProjectCard
              key={`project?.name-${index}`}
              imageUrl={'https://picsum.photos/seed/picsum/300/100'}
              title={project?.name}
              description={project?.description}
              // link={project?.link}
              // tags={project?.tags}
            />
          )
        })}
      </div>

      <div className="flex flex-row justify-end gap-2">
        <p className="self-center justify-self-end text-paragraph">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={(prevPage) => setCurrentPage(+prevPage - 1)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={(prevPage) => setCurrentPage(+prevPage + 1)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {paginatedProjects?.map((project: Project, index: number) => {
          return (
            <ProjectCard
              key={`project?.name-${index}`}
              imageUrl={'https://picsum.photos/seed/picsum/300/100'}
              title={project?.name}
              description={project?.description}
            />
          )
        })}
      </div>
      <div className="flex flex-row justify-end gap-2">
        <p className="self-center justify-self-end text-paragraph">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={(prevPage) => setCurrentPage(+prevPage - 1)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          // onClick={(prevPage) => setCurrentPage(+prevPage + 1)}
          onClick={(prevPage) => console.log(prevPage)}
          className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </>
  )
}
