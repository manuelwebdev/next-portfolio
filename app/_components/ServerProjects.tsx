'use client'
import { useState } from 'react'
import PaginatedProjects from './PaginatedProjects'
import Modal from './Modal'

export type Project = {
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
