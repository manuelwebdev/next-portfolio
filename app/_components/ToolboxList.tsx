type Skill = {
  name: string
  type: string
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

export default async function ToolboxList({ skills }: any) {
  const types: string[] = [
    ...new Set(skills?.map((skill: Skill) => skill?.type as string)),
  ]
  console.log({ types })
  return (
    <>
      {skills &&
        types?.map((type: string, index: number) => (
          <div key={`${type}-${index}`} className="flex flex-col gap-2">
            <h3 className="text-heading3 capitalize w-full border-b-2 border-b-primary border-b-solid">
              type
            </h3>
            <SkillListByType skills={skills} type={type} />
          </div>
        ))}
    </>
  )
}
