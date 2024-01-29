'use server'
import { get } from '@vercel/edge-config'
import { Suspense, useState } from 'react'
import PaginatedProjects from './PaginatedProjects'

export type Project = {
  name: string
  description: string
  tags: string[] | null
  link?: string
}

async function getProjects() {
  const data = await get<Project[]>('projects')
  return data
}

export default async function ServerProjects() {
  const projects = await getProjects()
  return (
    <div className="flex flex-col gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        <PaginatedProjects projects={projects} />
      </Suspense>
    </div>
  )
}
