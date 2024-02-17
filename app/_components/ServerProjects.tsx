import PaginatedProjects from './PaginatedProjects'

export type Project = {
  id: string | number
  name: string
  description: string
  tags: string[] | null
  link?: string
}

export default async function ServerProjects({ projects }: any) {
  return (
    <div className="flex flex-col gap-2">
      <PaginatedProjects projects={projects} />
    </div>
  )
}
