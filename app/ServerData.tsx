import { GetServerSideProps } from 'next'
import { getAll, get } from '@vercel/edge-config'

type Skill = {
  name: string
  type: string
}
type Social = {
  name: string
  url: string
}
export type Repo = {
  greeting: string
  skills: Skill[]
  socials: Social[]
}

async function getData() {
  const data = await getAll<Repo>()
  console.log({ dataTest: data })
  return data
}

export default async function ServerData() {
  const { skills = [], greeting = '', socials = [] } = await getData()
  return <></>
}
