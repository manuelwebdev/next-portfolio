import Image from 'next/image'

export type Skill = {
  name: string
  type: string
  icon: string
}

function SkillListByType({ skills, type }: { skills: Skill[]; type: string }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {skills
        ?.filter((skill: Skill) => skill?.type === type)
        .map((skill: Skill) => (
          <div key={skill?.name} className="flex gap-1">
            <Image src={skill?.icon} alt={''} width={15} height={15} />
            <p>{skill?.name}</p>
          </div>
        ))}
    </div>
  )
}

export default async function ToolboxList({ skills }: { skills: Skill[] }) {
  const types: any[] = [
    ...new Set(skills?.map((skill: Skill) => skill?.type as string)),
  ]
  return (
    <>
      {skills &&
        types?.map((type: string, index: number) => (
          <div key={`${type}-${index}`} className="flex flex-col gap-2">
            <h3 className="text-heading3 capitalize w-full border-b-2 border-b-primary border-b-solid">
              {type}
            </h3>
            <SkillListByType skills={skills} type={type} />
          </div>
        ))}
    </>
  )
}
