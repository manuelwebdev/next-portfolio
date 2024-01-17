import { get } from '@vercel/edge-config'

type Skill = {
  name: string
  type: string
}

async function getSkills() {
  const data = await get<Skill[]>('skills')
  return data
}
function SkillListByType({ skills, type }: { skills: Skill[]; type: string }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {skills
        ?.filter((skill: Skill) => skill?.type === type)
        .map((skill: Skill) => (
          <p key={skill?.name}>{skill?.name}</p>
        ))}
    </div>
  )
}

export default async function ToolboxList() {
  const skills = (await getSkills()) || []
  const types = [...new Set(skills?.map((skill: Skill) => skill?.type))]
  return (
    <>
      {types?.map((type: string) => (
        <div key={type} className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold capitalize">{`${type}s`}</h3>
          <SkillListByType skills={skills} type={type} />
        </div>
      ))}
    </>
  )
}
