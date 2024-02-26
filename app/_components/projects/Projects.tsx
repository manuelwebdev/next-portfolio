import { cookies } from 'next/headers'
import PaginatedProjects from './PaginatedProjects'
import { createClient } from '../../utils/supabase/server'
import { Suspense } from 'react'

export type Study = {
  text: string
  type: 'image' | 'text'
}
export type Project = {
  id: string
  created_at: string
  name: string
  description: string
  repository: string
  stack: string[]
  study: Study[]
  featured_image: {
    url: string
    blurUrl: string
  }
}

async function getProjects() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: projects = [] } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)
    return projects
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error('Portfolio:projects.tsx:', error as unknown as Error)
    } else {
      throw new Error(
        'Portfolio:projects.tsx: An unknown error occurred',
        error as Error,
      )
    }
  }
}

export default async function Projects() {
  const projects = await getProjects()
  return (
    <div className="h-full flex flex-col gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        <PaginatedProjects projects={projects ?? []} />
      </Suspense>
    </div>
  )
}
