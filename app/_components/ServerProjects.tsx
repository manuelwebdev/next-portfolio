import { cookies } from 'next/headers'
import PaginatedProjects from './PaginatedProjects'
import { createClient } from '../utils/supabase/server'

export type Project = {
  id: string
  created_at: string
  name: string
  description: string
  repository: string
  stack: string[]
  study: any[]
  featured_image: string
}

async function getProjects() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4)
  // console.log(projects)
  return projects
}

export default async function ServerProjects() {
  const projects = await getProjects()
  console.log(projects)
  return (
    <div className="flex flex-col gap-2">
      <PaginatedProjects projects={projects ?? []} />
    </div>
  )
}
